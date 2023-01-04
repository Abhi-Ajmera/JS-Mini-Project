let counter = 0;

function control(x){
    counter = counter + x;
    slideshow(counter);
}

slideshow(counter);

function slideshow(n){
    let slides = document.querySelectorAll(".slide");
    if(n==slides.length){
        counter=0;
        n=0;
    }   
    if(n < 0){
        counter=(slides.length-1);
        n=(slides.length-1);
    }
    for(let i of slides){
        i.style.display = "none";
    }
    slides[n].style.display = "block";
}