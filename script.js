var tl  = gsap.timeline({});
tl.from(".logo",1,{
    y:-200,
    opacity: 0,
});
tl.from("nav ul li",1,{
    y:-200,
    stagger: 0.2,
    opacity: 0,
});
tl.from(".menu",1,{
    y:-200,
    opacity: 0,
});
tl.from(".elmt", 1,{
    y: 500,
    stagger: 0.2,
    opacity: 0,
}); 
