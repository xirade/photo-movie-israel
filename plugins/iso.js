import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";


let grid = document.querySelector(".grid");
if(grid != null) {
    let msnry = new Masonry(grid, {
    itemSelector: ".grid-item",
    columnWidth: ".grid-sizer",
    percentPosition: true,
    initLayout: false,
  })
  // trigger initial layout
  imagesLoaded(grid).on('progress', function() {
      msnry.layout();
  })
} 
