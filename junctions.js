gsap.registerPlugin(ScrollTrigger);

const imageContainer = document. querySelector ('.image-container');
const layers = document.querySelectorAll('.image > *');

gsap.set('#layer3, #layer4, #layer5,#layer6',{opacity: 0 });
gsap.set('#layer1 , #layer2',{ opacity :1 });

ScrollTrigger.create({
trigger: imageContainer,
start:'top top',
end: '+=2000', 
pin: true, 
scrub: true,

//markers: true,
onUpdate: (self) => {
if(self.progress < 0.25) {
 gsap.to('#layer1 , #layer2', { opacity: 1 });
 gsap.to('#layer3, #layer4, #layer5,#layer6', { opacity: 0 });
} else if (self.progress >= 0.25 && self.progress < 0.5) {
 gsap.to('#layer3, #layer4', { opacity:1});
 gsap.to('#layer1 , #layer2, #layer5,#layer6', { opacity:0});
} else {
 gsap.to ('#layer5,#layer6', { opacity: 1 });
 gsap.to('#layer1 , #layer2, #layer3, #layer4', { opacity:0});
}
},
});