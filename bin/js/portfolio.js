const projects = [
        {
            title: "Sotare",
            tags: "E-Commerce,Drupal,Store",
            thumbnail: 'sotare.jpg',
            html: `
            <p>Origionally, I created a theme for <a href="http://iamsotare.storenvy.com/">this E-Commerce page</a>'s so that there would be a seemless transition between pages in and out of the online store.</p>
            <p>For my recent WEB project, I decided to remake Sotare's entire website from the ground-up using Drupal.</p><br>
            <p>The Sotare story begins when I was in the 8th grade. Every Saturday when I was 13, I would go mow my aunts lawn. Afterwards, she’d hand me $20 and immediately my brother would drive me to the local hobby shop to buy a Birdhouse or other skateboarding shirt.</p><p><a href="http://iamsotare.com/wp-content/uploads/2013/12/Adrian-Skateboarding-1998-Cropped-Small.jpg"><img class="aligncenter prettyimg  wp-image-350" alt="Adrian Skateboarding 1998 Cropped Small" src="http://iamsotare.com/wp-content/uploads/2013/12/Adrian-Skateboarding-1998-Cropped-Small.jpg" width="720" height="502" scale="0"></a></p><p>I loved the excitement of picking out a new shirt, the fun of building up my collection, and the anticipation of what shirt I could get next. Almost immediately I wanted to be able to create this experience for others. School hours were spent drawing clothes and designs. I even learned screen printing to make a few of my own, just for myself to wear.</p><p>But I wanted to do something bigger than that.</p><p><a href="http://iamsotare.com/wp-content/uploads/2013/12/SOTAREchaosshirtphoto-large.jpg"><img class="aligncenter prettyimg  wp-image-19" alt="SOTAREchaosshirtphoto-large" src="http://iamsotare.com/wp-content/uploads/2013/12/SOTAREchaosshirtphoto-large.jpg" width="528" height="358" scale="0"></a></p><p>In January of 2007, Sotare was born. This was during a time that most of my friends played in bands, so I was at shows a couple times a month. I began setting up a table at their shows and sold shirts to the teens there. It was fun to see others excited about my art and wearing my creations. I didn’t really look to do anything beyond those shows and eventually the idea went on hiatus in 2009.</p><p><a href="http://iamsotare.com/wp-content/uploads/2013/12/SOTAREvaluesphoto-large.jpg"><img class="aligncenter prettyimg  wp-image-21" alt="SOTAREvaluesphoto-large" src="http://iamsotare.com/wp-content/uploads/2013/12/SOTAREvaluesphoto-large.jpg" width="528" height="357" scale="0"></a></p><p>I thought about Sotare from time to time, wondering if the project would ever see the light of day again. Wondering if it would ever live up to its full potential. In early 2013 I doodled a kangaroo head and mocked it up on a shirt. This sparked a few thoughts in my brain. What if this could work? What if I really took my time and did things differently this time around? This led me to seriously consider bringing it back. I knew that if I dove into this, it was going to be a lot of work, and I wanted to do it to the best of my abilities. &nbsp;My brothers and friends encouraged me to do it.</p><p>I took the leap.</p><p><a href="http://iamsotare.com/wp-content/uploads/2014/04/Kitchen-Painting.jpg" class="hoverZoomLink"><img class="aligncenter prettyimg  wp-image-245 hoverZoomLink" alt="Kitchen Painting" src="http://iamsotare.com/wp-content/uploads/2014/04/Kitchen-Painting-1024x683.jpg" width="491" height="328" scale="0"></a></p><p>So I got to work planning things out. After spending months planning and figuring out the best way to bring Sotare back into the world things were finally taking shape. I wanted to include things I am passionate about and things I enjoy. Things like skateboarding, music, Maryland, toys, and great artwork. These ideas would be expressed through clothing, paintings, paper toys, resin toys, posters, and other collectibles. We relaunched December 16, 2013.</p><p><a href="http://iamsotare.com/wp-content/uploads/2013/12/10599151_272793542928338_7447408805458831375_n.jpg"><img class="aligncenter prettyimg  wp-image-347" alt="10599151_272793542928338_7447408805458831375_n" src="http://iamsotare.com/wp-content/uploads/2013/12/10599151_272793542928338_7447408805458831375_n.jpg" width="498" height="334" scale="0"></a></p><p>Sotare comes from a Greek word meaning savior. &nbsp;This is not just a reference to my faith, but a calling for the creative hero inside each of us. &nbsp;The kangaroo is about progress, eternally leaping forward into the unknown, creating a map for others to follow. &nbsp;My goal is to encourage people to take the reigns on their life and turn their dreams into reality. &nbsp;Turning a dream into reality involves a leap of faith, but with great risk can come great reward.</p><p><img class="aligncenter prettyimg  wp-image-348" alt="10384891_301591140048578_1291479663818497979_n" src="http://iamsotare.com/wp-content/uploads/2013/12/10384891_301591140048578_1291479663818497979_n.jpg" width="538" height="359" scale="0"></p><p>Sotare has challenged me as an artist, designer, and entrepreneur. I want to bring you that same feeling that I had when going to the hobby shop to buy my shirts- the excitement of getting something new, the fun of collecting, and the pride in owning what no one else has.</p><p>Leaping forward,</p><p>-Adrian Black</p>`,
            link: 'http://dev-sotare.pantheonsite.io/'
        },
        {
            title: "Spilled Paint",
            tags: "Experiment,WebGL,Science",
            video: 'spilledpaint.mp4',
            thumbnail: 'spilledpaint.jpg',
            html: `
            <p>Have you ever watched those videos where <a href="https://www.youtube.com/watch?v=YCv4e60HG28" title="Music Video using this art technique">multiple paints are being poured ontop of one another</a>, leaving you in awe of the way everything flows?</p>
            <p>No? Well I sure have.  Personally, I love the look of it and I wanted to try coding it.</p>
            <p>Using <code>WebGL</code> I was able to get it running very smoothly even on super large displays.  Typically, canvas's javascript API is limited by the processing power of the computers CPU. But using <code>WebGL</code> I'm able to take full advantage of the computers GPU and render amazing things at large resolutions.</p>
            <p>In this, I'm using an open-source 3d perlin noise for the actual paint. The perlin noise returns a value between -1 and 1, so I have an array of if statements that adjusts the color depending on the number.</p>
            `,
            link: 'https://codepen.io/darrylhuffman/pen/prrzVQ'
        },
        {
            title: "Blackhole",
            tags: "Experiment,WebGL,Science",
            video: 'blackhole.mp4',
            thumbnail: 'blackhole.jpg',
            html: `
            <p>This project was my first attempt at using <code>WebGL</code> in a canvas expirament. Inspired by my love for space and black holes, I created this interactive canvas expirament.</p>
            <p>Truthfully, it doesn't do anything more than look pretty. But with the knowledge I gained by coding this, I strive to find new unique approaches to visualizing data.</p>
            `,
            link: 'https://codepen.io/darrylhuffman/pen/gRZrpv'
        },
        {
            title: "Microscope",
            tags: "Experiment,WebGL,Science",
            video: 'microscope.mp4',
            thumbnail: 'microscope.jpg',
            html: `
            `,
            link: 'https://darrylhuffman.com/atom/'
        }
    ];

function onAnimationComplete(){
    document.getElementById('welcomeText').classList.add('show');
}

function closeProject(e){
    let _this = this.parentElement,
        relIndex = _this.getAttribute('rel'),
        project = projects[relIndex];  

    document.getElementById('root').classList.remove('projectOpen');
    document.getElementById('featuredProjects').classList.remove('projectOpen');

    _this.style.left = '0px';
    _this.style.width = '100%';
    
    if(_this.children[0].tagName == 'VIDEO') _this.children[0].pause();

    setTimeout(function(){
        _this.style.top = '0px';
        _this.parentElement.classList.remove('open');
    }, 600);

    _this.parentElement.addEventListener('click', openProject);
    e.stopPropagation();
}

function openProject(){
    let relIndex = this.getAttribute('rel'),
        project = projects[relIndex],
        header = this.querySelector('.header'),
        viewportOffset = this.getBoundingClientRect(),
        newBounds = {
            top: -viewportOffset.top,
            left: -viewportOffset.left,
            height: window.innerHeight,
            width: window.innerWidth
        };
    
    this.removeEventListener('click', openProject);

    this.classList.add('open');
    document.getElementById('root').classList.add('projectOpen');
    document.getElementById('featuredProjects').classList.add('projectOpen');

    header.style.top = newBounds.top+'px';
    
    if(header.children[0].tagName == 'VIDEO') header.children[0].play();

    setTimeout(function(){
        header.style.left = newBounds.left+'px';
        header.style.width = newBounds.width+'px';
    }, 600);
}

(function createProjects(){
let fragment = document.createDocumentFragment();

projects.map((projectData, i) => {
    let {title, tags, date, video, link, thumbnail} = projectData,
        use = 'project, container, header, title, tags, html, close, bg';
    
    if(video) use += ',video';

    let e = use
        .split(',')
        .reduce((acc, data) => {
            data = data.trim();
            let x = document.createElement(data == 'video' ? 'video' : 'div' );
            x.className = data;
            x.innerHTML = projectData[data] ? projectData[data] : '';
            acc[data] = x;
            return acc;
        }, {});

    if(video){
        e.video.src = 'bin/videos/projects/'+video;
        e.video.setAttribute('autobuffer','true');
        e.header.appendChild(e.video);
    }

    e.html.innerHTML = `
        <h1>${title}</h1>
        <div class="textblock">
            <a class="visitProject" href="${projectData.link}" target="_blank">Visit Project</a>
            ${projectData.html}
            <a class="visitProject bottom" href="${projectData.link}" target="_blank">Visit Project</a>
        </div>
    `;
    e.close.innerHTML = 'X';

    e.project.setAttribute('rel', i);
    //e.project.classList.add('col-13-3');
    e.project.classList.add('col-4-1');
    e.container.className = 'container';
    e.header.className = 'header';

    e.container.appendChild(e.title);
    e.container.appendChild(e.tags);
    
    e.header.style.backgroundImage = 'url(bin/images/projects/'+thumbnail+')';
    e.bg.style.backgroundImage = 'url(bin/images/projects/'+thumbnail+')';

    e.container.appendChild(e.bg);
    e.header.appendChild(e.html);
    e.header.appendChild(e.close);
    
    
    e.project.appendChild(e.header);
    e.project.appendChild(e.container);

    e.project.addEventListener('click', openProject);
    e.close.addEventListener('click', closeProject);
    fragment.appendChild(e.project);
});

document.getElementById('featuredProjects').appendChild(fragment);
})();