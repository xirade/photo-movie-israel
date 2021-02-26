import { jarallax} from 'jarallax'

document.addEventListener('animationstart', function(event) {
  
  jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.03,
    disableParallax: function () {
      return /iPad|iPhone|iPod|Android/.test(navigator.userAgent);
  },
});

})
