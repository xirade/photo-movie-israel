<template>
  <mdb-container>
    <mdb-row class="pb-5">
      <mdb-col md="4" lg="3" class="my-auto">
        <mdb-card>
          <mdb-view hover>
            <a href="#!">
              <mdb-card-image
                src="https://res.cloudinary.com/dxeebmzdv/image/upload/v1595970339/0035_rgph7p.jpg"
                alt="Card image cap"
              ></mdb-card-image>
              <mdb-mask flex-center waves overlay="black-light"></mdb-mask>
            </a>
          </mdb-view>
          <mdb-card-body>
            <mdb-card-title>Photoshoot</mdb-card-title>
            <mdb-card-text>
              Some quick example text to build on the card title and make up the bulk of the
              card's content.
            </mdb-card-text>
            <mdb-btn color="warning" class="ml-0">Read more</mdb-btn>
          </mdb-card-body>
        </mdb-card>
      </mdb-col>
      <mdb-col md="4" lg="5" class="my-5 mx-auto">
        <mdb-card>
          <mdb-view hover>
            <a href="#!">
              <video class="video-fluid z-depth-1" autoplay loop muted>
                <source
                  src="https://res.cloudinary.com/dxeebmzdv/video/upload/v1596091560/EOD_wd4m1j.mp4"
                  type="video/mp4"
                />
              </video>
              <mdb-mask flex-center waves overlay="black-light"></mdb-mask>
            </a>
          </mdb-view>
          <mdb-card-body>
            <mdb-card-title>Videoshoot</mdb-card-title>
            <mdb-card-text>
              Some quick example text to build on the card title and make up the bulk of the
              card's content.
            </mdb-card-text>
            <mdb-btn class="ml-0" color="warning">Read more</mdb-btn>
          </mdb-card-body>
        </mdb-card>
      </mdb-col>
      <mdb-col md="4" lg="3" class="my-auto">
        <mdb-card>
          <mdb-view hover>
            <a href="#!">
              <mdb-card-image
                src="https://res.cloudinary.com/dxeebmzdv/image/upload/v1596090961/%D0%BD%D0%B5%D0%B2%D0%B5%D1%81%D1%82%D0%B0_zmpch0.jpg"
                alt="Card image cap"
              ></mdb-card-image>
              <mdb-mask flex-center waves overlay="black-light"></mdb-mask>
            </a>
          </mdb-view>
          <mdb-card-body>
            <mdb-card-title>Montage</mdb-card-title>
            <mdb-card-text>
              Some quick example text to build on the card title and make up the bulk of the
              card's content.
            </mdb-card-text>
            <mdb-btn class="ml-0" color="warning">Read more</mdb-btn>
          </mdb-card-body>
        </mdb-card>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardImage,
  mdbCardHeader,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
  mdbCardFooter,
  mdbCardUp,
  mdbCardAvatar,
  mdbCardGroup,
  mdbBtn,
  mdbView,
  mdbMask,
  mdbIcon,
} from "mdbvue";
export default {
  name: "CardProPage",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardImage,
    mdbCardHeader,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbCardFooter,
    mdbCardUp,
    mdbCardAvatar,
    mdbCardGroup,
    mdbBtn,
    mdbView,
    mdbMask,
    mdbIcon,
  },
};
</script>

<style scoped>
.card {
  background-color: #fff;
}
    .card-title {
        font-family: "DINNeuzeitGroteskLTW01-BdCn";
    }
</style>