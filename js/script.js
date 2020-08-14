// animation title
const spans = document.querySelectorAll('h1 span');
spans.forEach(span => span.addEventListener('mouseover', function(e) {
    span.classList.add('animated', 'rubberBand')
}));

spans.forEach(span => span.addEventListener('mouseover', function(e) {
    span.classList.remove('animated', 'rubberBand')
}));

// animation skills bar
const htmlBar = document.querySelector('.bar-html')
const cssBar = document.querySelector('.bar-css')
const jsBar = document.querySelector('.bar-javascript')
const reactBar = document.querySelector('.bar-reactjs')
const psBar = document.querySelector('.bar-ps')

var t1 = new AnimationTimeline()

t1.fromTo(htmlBar, .75, {width:`calc(0%-6px)`}, {width:`calc(90%-6px)`, ease: Power4.easeOut})
    .fromTo(cssBar, .75, {width: `calc(0%-6px)`}, {width: `calc(85%-6px)`, ease: Power4.easeOut})
    .fromTo(jsBar, .75, {width: `calc(0%-6px)`}, {width: `calc(55%-6px)`, ease: Power4.easeOut})
    .fromTo(reactBar, .75, {width: `calc(0%-6px)`}, {width: `calc(50%-6px)`, ease: Power4.easeOut})
    .fromTo(psBar, .75, {width: `calc(0%-6px)`}, {width: `calc(85%-6px)`, ease: Power4.easeOut})

const contoller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
    triggerElement: 'skills',
    triggerHook: 0
})

.setTween(t1)
.addTo(contoller)

// show project
const showRequiredCategory = event => {
    const getId = event.id
    const links = document.querySelectorAll('.work-category button')
    for(i=0; i<links.length; i++){
        if(links[i].hasAttribute('class')){
            links[i].classList.remove('active')
        }
    }

    event.classList.add('active')
    const getCategory = document.querySelector(`.category-${getId}`)
    const categories = document.querySelectorAll('div[class ^= "category-"')
    for(i=0; i<categories.length; i++){
        if(categories[i].hasAttribute('class')){
            categories[i].classList.remove('showCategory')
            categories[i].classList.add('hideCategory')
        }
    }

    getCategory.classList.remove('hideCategory')
    getCategory.classList.add('showCategory')
}