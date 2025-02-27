// navbar

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if(scrollY >= 180){
        navbar.classList.add('bg');
    } else{
        navbar.classList.remove('bg');    
    }
})

// video contols

var video = document.getElementById("myVideo");

var btn = document.getElementById("myBtn");

function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    }    else {
        video.pause();
        btn.innerHTML = "Play";
    }
}

// image collage

const collageImages = [...document.querySelectorAll('.collage-img')]

collageImages.map((item, i) => {
    item.addEventListener('mouseover',() => {
        collageImages.map((image, index) => {
            if(index!= i){
                image.style.filter = `blur(10px)`;
                item.style.zIndex = 2;
            }
        })
    })

    item.addEventListener('mouseleave', () => {
        collageImages.map((image, index) => {
            image.style = null;
        })
    })
})