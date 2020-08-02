<template>
  <div class="container py-5">
    <mdb-carousel
    :items="thumbnailCarousel"
    thumbnails
    :interval="8000"
  ></mdb-carousel>
  </div>
</template>

<script>
  import { mdbCarousel } from "mdbvue";
  export default {
    name: "ThumbnailsCarouselPage",
    components: {
      mdbCarousel
    },
    data() {
      return {
        thumbnailCarousel: [
          {
            img: true,
            src:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1596310515/cat_1200getty_pxmgj9.jpg",
            thumbnail:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1596310515/cat_1200getty_pxmgj9.jpg"
          },
          {
            img: true,
            src:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1596310336/mountain_beaver-a_rufa_qwz4mt.jpg",
            thumbnail:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1596310336/mountain_beaver-a_rufa_qwz4mt.jpg"
          },
          {
            img: true,
            src:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1596213657/photo-1537815749002-de6a533c64db_k5i0jp.jpg",
            thumbnail:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1596213657/photo-1537815749002-de6a533c64db_k5i0jp.jpg"
          }
        ]
      };
    }
  };
</script>


<style>

</style>