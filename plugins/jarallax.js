import 'object-fit-images'
import { jarallax, jarallaxVideo } from 'jarallax'

document.addEventListener('animationstart', function(event) {
  jarallaxVideo()

  jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.3,
});
  jarallax(document.querySelectorAll('.jarallax-video'), {
    speed: 0.2,
    videoSrc: 'https://youtu.be/mru3Q5m4lkY'
  })
})
