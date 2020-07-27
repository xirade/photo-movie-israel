<template>
  <div>
    <mdb-row>
      <mdb-col md="12" class="m-0 pb-2 pt-0 mt-2">
           <mdb-view
          class="zoom overlay"
        >
        <img class=" img-fluid z-depth-1"  src="~/assets/img/1.jpg"
          alt="zoom">
          <mdb-mask waves overlay="white-slight" class="white-text d-flex flex-column">
            <p class="display-3 my-auto mx-auto flex-center">Adventure time</p>
            <div class="tool-icon ml-2 mb-2">
              <a href="#!" class="icon-feedback">
                <mdb-icon far size="lg" icon="heart" />13
              </a>
              <a href="#!" class="icon-feedback">
                <mdb-icon size="lg" icon="comment" />25
              </a>
            </div>
            <button class="full-img-slider"></button>
          </mdb-mask>
        </mdb-view>
      </mdb-col>
    </mdb-row>

    <mdb-row>
      <mdb-col md="4" class="m-0 py-2">
        <mdb-view
          class="zoom overlay"
        >
        <img class=" img-fluid z-depth-1"  src="~/assets/img/2.jpg"
          alt="zoom">
          <mdb-mask waves overlay="white-slight" class="white-text d-flex flex-column">
            <p class="display-3 my-auto mx-auto flex-center">Adventure time</p>
            <div class="tool-icon ml-2 mb-2">
              <a href="#!" class="icon-feedback">
                <mdb-icon far size="lg" icon="heart" />13
              </a>
              <a href="#!" class="icon-feedback">
                <mdb-icon size="lg" icon="comment" />25
              </a>
            </div>
            <button class="full-img-slider"></button>
          </mdb-mask>
        </mdb-view>
      </mdb-col>

      <mdb-col md="4" class="m-0 py-2">
        <mdb-view
          class="zoom overlay"
        >
        <img class=" img-fluid z-depth-1"  src="~/assets/img/3.jpg"
          alt="zoom">
          <mdb-mask waves overlay="white-slight" class="white-text d-flex flex-column">
            <p class="display-3 my-auto mx-auto flex-center">Adventure time</p>
            <div class="tool-icon ml-2 mb-2">
              <a href="#!" class="icon-feedback">
                <mdb-icon far size="lg" icon="heart" />13
              </a>
              <a href="#!" class="icon-feedback">
                <mdb-icon size="lg" icon="comment" />25
              </a>
            </div>
            <button class="full-img-slider"></button>
          </mdb-mask>
        </mdb-view>
      </mdb-col>

      <mdb-col md="4" class="m-0  py-2">
        <mdb-view
          class="zoom overlay"
        >
        <img class=" img-fluid z-depth-1"  src="~/assets/img/4.jpg"
          alt="zoom">
          <mdb-mask waves overlay="white-slight" class="white-text d-flex flex-column">
            <p class="display-3 my-auto mx-auto flex-center" style="">Adventure time</p>
            <div class="tool-icon ml-2 mb-2">
              <a href="#!" class="icon-feedback">
                <mdb-icon far size="lg" icon="heart" />13
              </a>
              <a href="#!" class="icon-feedback">
                <mdb-icon size="lg" icon="comment" />25
              </a>
            </div>
            <button class="full-img-slider"></button>
          </mdb-mask>
        </mdb-view>
      </mdb-col>
    </mdb-row>

    <mdb-row>
      <mdb-col md="6" class="m-0 py-2">
        <mdb-view
          class="zoom overlay"
        >
         <img class=" img-fluid z-depth-1"  src="~/assets/img/5.jpg"
          alt="zoom">
          <mdb-mask waves overlay="white-slight" class="white-text d-flex flex-column">
            <p class="display-3 my-auto mx-auto flex-center">Adventure time</p>
            <div class="tool-icon ml-2 mb-2">
              <a href="#!" class="icon-feedback">
                <mdb-icon far size="lg" icon="heart" />13
              </a>
              <a href="#!" class="icon-feedback">
                <mdb-icon size="lg" icon="comment" />25
              </a>
            </div>
            <button class="full-img-slider"></button>
          </mdb-mask>
        </mdb-view>
      </mdb-col>

      <mdb-col md="6" class="m-0  py-2">
        <mdb-view
          class="zoom overlay"
        >
        <img class=" img-fluid z-depth-1"  src="~/assets/img/6.jpg"
          alt="zoom">
          <mdb-mask waves overlay="white-slight" class="white-text d-flex flex-column">
            <p class="display-3 my-auto mx-auto flex-center">Adventure time</p>
            <div class="tool-icon ml-2 mb-2">
              <a href="#!" class="icon-feedback">
                <mdb-icon far size="lg" icon="heart" />13
              </a>
              <a href="#!" class="icon-feedback">
                <mdb-icon size="lg" icon="comment" />25
              </a>
            </div>
            <button class="full-img-slider"></button>
          </mdb-mask>
        </mdb-view>
      </mdb-col>
    </mdb-row>
    <silent-box class="d-none" :gallery="gallery"></silent-box>
  </div>
</template>

<script>
import { mdbRow, mdbCol, mdbView, mdbMask, mdbIcon} from "mdbvue";
import VueSilentbox from 'vue-silentbox';
export default {
  components: {
    VueSilentbox,
    mdbRow,
    mdbCol,
    mdbView,
    mdbMask,
    mdbIcon
  },
  data() {
    return {
      gallery: [
        {
            src: '~/assets/img/1.jpg',
            description: 'Star Night Sky Ravine by Mark Basarab, from Unsplash.',
            alt: 'Blue starry night photo.',
            thumbnailWidth: '220px'
        },
        {
            src: '~/assets/img/2.jpg',
            description: 'Corno Nero, Italy by Luca Zanon, from Unsplash.',
            alt: 'Landscape photo of mountain with fog.',
            thumbnailWidth: '220px'
        },
        {
            src: '~/assets/img/3.jpg',
            description: 'Remote forest path in Gävle, Sweden by Geran de Klerk, from Unsplash.',
            alt: 'Low angle photo of pine trees.',
            thumbnailWidth: '220px'
        },
    ]
    }
  },
};
</script>

<style scoped>
.mask {
  background-color: rgba(26, 26, 26, 0.698);
}
.full-img-slider {
  background-color: transparent;
  border: none;
  position: absolute;
  visibility: visible;
  width: 100%;
  height: 100%;
  z-index: 0;
}
.tool-icon{
  z-index: 1;
}
</style>