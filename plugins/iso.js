import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";

var msnry;
var grid = document.querySelector(".grid");
imagesLoaded( grid, function(){
    msnry = new Masonry(grid, {
    itemSelector: ".grid-item",
    columnWidth: ".grid-sizer",
    percentPosition: true,
    initLayout: false,
  })
  msnry.on( 'layoutComplete', function( sliders ) {
  });
  // trigger initial layout
  msnry.layout();
})
