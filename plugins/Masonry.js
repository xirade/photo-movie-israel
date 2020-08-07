import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";

var grid = document.querySelector('.grid');
var msnry;

document.addEventListener('animationstart', function(event) {
  imagesLoaded( grid, function() {
  msnry = new Masonry( grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
  });
});
})