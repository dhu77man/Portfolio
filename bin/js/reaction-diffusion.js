$(document).ready(function(){
	var headerContainer = document.querySelector('#welcomeText');
	var headerTitle = document.querySelector('#welcomeText h1 .coord');
	var textContent = document.querySelector('#welcomeText .content p');

	document.querySelector('#welcomeText .content').style.width = document.querySelector('#welcomeText h1 span').offsetWidth+'px';


	var scene, camera, renderer;
	var bufferScene, textureA, textureB, bufferMaterial, colorizeMaterial, plane, bufferObject, finalMaterial, quad;

	var height, width, startTime, currentTime;

	startTime = new Date().getTime();
	currentTime = startTime;

	height = window.innerHeight,
		width = window.innerWidth;

	var movements = [];

	var mouse = {
		clicked: 0,
		x: 0,
		y: 0,
	};

	var perlin = new Perlin();
	var wanderer = {
		x: -500,
		y: -500,
		r: 70
	};

	var presets = {
		/*
			f: feed rate,
			k: kill rate,
			s: size of mouse draw
		*/
		custom: {
			f: 0.055,
			k: 0.062,
			s: 20
		},
		mitosis: {
			f: 0.0367,
			k: 0.0649,
			s: 1
		},
		coral: {
			f: 0.0545,
			k: 0.062,
			s: 1
		},
		trail: {
			f: 0.0367,
			k: 0.0649,
			s: 20
		},
		typical: {
			f: 0.055,
			k: 0.062,
			s: 15
		},
		range: {
			kV: ((0.07 - 0.045) / width) + 0.045,
			fV: ((0.1 - 0.01) / height) + 0.01,
			s: 20
		}
	};


	var active = presets.custom;

	var dA = 1.0,
		dB = 0.5;

	var seedRandom = 0, 
		seedScale = 0.01, 
		seedThreshold = 0.9;

	var iterations = 2, // number of samples per frame - this speeds everything up, but is demanding
		scale = 1,
		clear = false,
		seed = 1;
		
	setTimeout(function(){
		iterations = 10; // make the animation go faster after they can read "hi"
	}, 2000);

	var root = $('#root');
	document.addEventListener('mousemove', function(e){
		mouse.x = e.pageX;
		mouse.y = height - e.pageY - root.scrollTop();
	});

	document.addEventListener('mousedown', function(e){
		mouse.x = e.pageX;
		mouse.y = height - e.pageY - root.scrollTop();
		mouse.clicked = 1;
	});
	document.addEventListener('mouseup', function(e){
		mouse.clicked = 0;
	});

	var setup = {
		scene: function(){
			scene = new THREE.Scene();
			camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 1000 );
			camera.position.z = 2;
			renderer = new THREE.WebGLRenderer();
			renderer.setSize( width, height );
			document.getElementById('welcome').appendChild( renderer.domElement );
		},
		bufferScene: function(){
			bufferScene = new THREE.Scene();

			textureA = new THREE.WebGLRenderTarget( window.innerWidth, window.innerHeight, { 
				minFilter: THREE.LinearFilter, 
				magFilter: THREE.LinearMipMapLinearFilter, 
				format: THREE.RGBAFormat,
				type: THREE.FloatType});

			textureB = new THREE.WebGLRenderTarget( window.innerWidth, window.innerHeight, { 
				minFilter: THREE.LinearFilter, 
				magFilter: THREE.LinearMipMapLinearFilter, 
				format: THREE.RGBAFormat,
				type: THREE.FloatType} );

			var topOffset = (headerContainer.offsetHeight/2);
			var textY = (headerContainer.offsetTop + textContent.offsetTop) - topOffset;
			var textWidth = .5;
			
			bufferMaterial = new THREE.ShaderMaterial( {
				uniforms: {
					bufferTexture: { type: "t", value: textureA },
					res : {type: 'v2',value:new THREE.Vector2(window.innerWidth ,window.innerHeight)},
					mouse: {type:'v3',value:new THREE.Vector3(0,0,0)},
					time: {type:'f', value:0.0},
					dA: {type:'f', value:dA},
					dB: {type:'f', value:dB},
					feed: {type:'f', value:active.f || 0},
					k: {type:'f', value:active.k || 0},
					fV: {type:'f', value:active.fV || 0},
					kV: {type:'f', value:active.kV || 0},
					clear: {type:'f', value: 0},
					drawSize: {type: 'f', value: active.s},
					seedX: {type: 'f', value: width/2+8 },
					seed: {type: 'f', value: seed },
					wanderer1: {type: 'v3', value:new THREE.Vector3(
						wanderer.x,
						wanderer.y,
						wanderer.r
					)},

					// x,y,width,height
					title : {type: 'v4', value:new THREE.Vector4(
						headerTitle.offsetLeft,
						headerContainer.offsetTop - topOffset,
						headerTitle.offsetWidth,
						headerTitle.offsetHeight
					)},

					textLeft : {type: 'v4', value:new THREE.Vector4(
						headerTitle.offsetLeft,
						textY,
						headerTitle.offsetWidth*textWidth,
						textContent.offsetHeight
					)},

					textRight : {type: 'v4', value:new THREE.Vector4(
						headerTitle.offsetLeft + headerTitle.offsetWidth*(.5+(.5-textWidth)),
						textY,
						headerTitle.offsetWidth*textWidth,
						textContent.offsetHeight
					)}
				},
				fragmentShader: document.getElementById( 'fragmentShader' ).innerHTML
			} );

			colorizeMaterial = new THREE.ShaderMaterial( {
				uniforms : {
					resolution : { type : 'v2', value : new THREE.Vector2( window.innerWidth, window.innerHeight) },
					texture : { type : 't', value : textureB, minFilter : THREE.NearestFilter },
					scale : {type:'f', value:scale}
				},
				fragmentShader : document.getElementById( 'colorize' ).textContent
			} );

			plane = new THREE.PlaneBufferGeometry( window.innerWidth, window.innerHeight);
			bufferObject = new THREE.Mesh( plane, bufferMaterial );
			bufferScene.add(bufferObject);

			plane = new THREE.PlaneBufferGeometry( window.innerWidth, window.innerHeight);
			quad = new THREE.Mesh( plane, colorizeMaterial );
			scene.add(quad);
		}
	}

	setup.scene();
	setup.bufferScene();

	function clearScreen() { clear = 1; }
	function seedScreen() { seedRandom = 1; }

	setTimeout(seedScreen, 300);

	window.addEventListener('resize', function() 
						{
		var NW = window.innerWidth;
		var NH = window.innerHeight;
		renderer.setSize(NW, NH);

		camera.aspect = NW / NH;
		camera.updateProjectionMatrix();

		textureA.setSize(NW, NH);
		textureB.setSize(NW, NH);

		bufferMaterial.uniforms.res.value.x = NW;
		bufferMaterial.uniforms.res.value.y = NH;
	});



	var endClear = false;
	function render() {
		now = new Date().getTime();
		currentTime = (now - startTime) * 0.0001;

		if(!animation_complete){
			mouse.clicked = true;
			mouse.x = animation[animation_step][0] + animation_x;
			mouse.y = animation[animation_step][1] + height - animation_y;

			bufferMaterial.uniforms.mouse.value.x = mouse.x;
			bufferMaterial.uniforms.mouse.value.y = mouse.y;

			animation_step++;
			if(animation_step == animation.length){
				onAnimationComplete ? onAnimationComplete() : null;
				animation_complete = true;
				mouse.clicked = false;

				document.querySelector('#welcomeText h1').classList.add('visible');
				document.querySelector('#welcomeText .content').classList.add('visible');
			}
		}

		if(animation_complete){
			wanderer.x = (perlin.get1d(currentTime)+.5) * width;
			wanderer.y = (perlin.get1d(currentTime*0.9+45664)+.5) * height;
			var size = ((perlin.get1d(currentTime+5646) + 0.5) / 2) * wanderer.r;

			bufferMaterial.uniforms.wanderer1.value.x = wanderer.x;
			bufferMaterial.uniforms.wanderer1.value.y = wanderer.y;
			bufferMaterial.uniforms.wanderer1.value.z = size;

			if(mouse.clicked){
				bufferMaterial.uniforms.mouse.value.x = mouse.x;
				bufferMaterial.uniforms.mouse.value.y = mouse.y;
				movements.push([mouse.x, mouse.y]);
			}
		
		}

		bufferMaterial.uniforms.mouse.value.z = mouse.clicked;

		for(var i = 0; i < iterations; i++){
			//Draw to textureB
			renderer.render(bufferScene,camera,textureB,true);

			//Swap textureA and B
			[textureA, textureB] = [textureB, textureA];
			quad.material.map = textureB;
			bufferMaterial.uniforms.bufferTexture.value = textureA;
		}

		// update uniforms
		bufferMaterial.uniforms.time.value = currentTime;

		if(endClear){
			bufferMaterial.uniforms.clear.value = 0;
			clear = 0;
			endClear = false;
		}
		
		if(clear == 1){
			bufferMaterial.uniforms.feed.value = active.f || 0;
			bufferMaterial.uniforms.k.value = active.k || 0;
			bufferMaterial.uniforms.fV.value = active.fV || 0;
			bufferMaterial.uniforms.kV.value = active.kV || 0;
			bufferMaterial.uniforms.drawSize.value = active.s;
			bufferMaterial.uniforms.clear.value = 1;
			endClear = true;
		}

		if(seed == 1){
			seed = 0;
			bufferMaterial.uniforms.seed.value = 0;
		}
		
		renderer.render( scene, camera );
	}



	var animation = [[12,134],[12,134],[10,134],[9,133],[9,133],[9,130],[9,130],[9,130],[9,130],[9,131],[9,133],[9,133],[9,131],[9,131],[9,131],[9,131],[8,130],[8,130],[8,130],[8,130],[8,130],[8,130],[8,130],[8,129],[8,128],[6,125],[6,120],[5,119],[3,109],[2,95],[2,74],[2,53],[1,32],[0,21],[0,15],[0,13],[0,12],[0,12],[0,12],[0,12],[73,121],[73,121],[73,117],[73,109],[73,96],[72,80],[72,60],[70,35],[70,18],[69,7],[69,2],[70,0],[18,69],[18,69],[18,69],[19,70],[24,70],[33,71],[46,72],[57,73],[120,55],[120,55],[120,51],[120,44],[120,35],[118,26],[117,18],[117,15],[117,15],[117,15],[117,15],[117,15],[117,15],[117,15],[117,15],[117,15],[117,15],[117,15],[117,15],[117,15],[117,15],[117,15],[123,113],[123,113],[123,113],[123,113],[123,113]],
		animation_step = 0,
		animation_complete = false,
		animation_x = width * 0.5-60,
		animation_y = height * 0.5 - 150;


	var optionDivs = document.getElementsByClassName('option');
	for(var i = 0; i < optionDivs.length; i++){
		optionDivs[i].addEventListener('click',function(){
			active = presets[this.innerHTML.toLowerCase()];
			clear = 1;
		});
	}

	canvasHelper.attatch({
		canvas: renderer.domElement,
		update: render
	});
});