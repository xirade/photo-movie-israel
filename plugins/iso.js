import Masonry from "masonry-layout";


let msnry = document.querySelector(".grid");
if (msnry != null) {
  msnry = new Masonry(msnry, {
    itemSelector: ".grid-item",
    columnWidth: ".grid-sizer",
    percentPosition: true,
    gutter: 0,
    initLayout: false,
  })


  // trigger initial layout
    msnry.layout();
}
