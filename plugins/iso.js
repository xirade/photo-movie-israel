import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";
import WebFont from "webfontloader";


let grid = document.querySelector('.grid');
let msnry;

function triggerMasonry() {
  // don't proceed if masonry has not been initialized
  if (!msnry) {
    return;
  }
  msnry.layout();
}

if (grid != null) {

  imagesLoaded(grid, function () {
    msnry = new Masonry(grid, {
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      percentPosition: true
    })
  }
  );
}

WebFont.load({
  google: {
    families: ['Oswald']
  },
  active: triggerMasonry,
  inactive: triggerMasonry
});


