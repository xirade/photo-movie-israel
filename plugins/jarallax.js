import { jarallax} from 'jarallax'

document.addEventListener('animationstart', function(event) {
  
  jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.1,
    disableParallax: function () {
      return /iPad|iPhone|iPod|Android/.test(navigator.userAgent);
  },
});

})
