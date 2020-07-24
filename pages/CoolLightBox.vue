<template>
  <div>
    <mdb-row>
      <mdb-col md="12" class="m-0 pb-2 pt-0">
        <mdb-view class="zoom overlay" hover>
          <video class="video-fluid z-depth-1" autoplay loop muted>
            <source src="https://mdbootstrap.com/img/video/Sail-Away.mp4" type="video/mp4" />
          </video>
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
            <button class="full-img-slider" v-on:click="openLightboxOnSlide(1)"></button>
          </mdb-mask>
        </mdb-view>
      </mdb-col>
    </mdb-row>

    <mdb-row>
      <mdb-col md="4" class="m-0 py-2">
        <mdb-view
          class="zoom overlay img-fluid z-depth-1"
          src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img(115).jpg"
          alt="zoom"
        >
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
            <button class="full-img-slider" v-on:click="openLightboxOnSlide(2)"></button>
          </mdb-mask>
        </mdb-view>
      </mdb-col>

      <mdb-col md="4" class="m-0 py-2">
        <mdb-view
          class="zoom overlay img-fluid z-depth-1"
          src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img(116).jpg"
          alt="zoom"
        >
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
            <button class="full-img-slider" v-on:click="openLightboxOnSlide(3)"></button>
          </mdb-mask>
        </mdb-view>
      </mdb-col>

      <mdb-col md="4" class="m-0 py-2">
        <mdb-view
          class="zoom overlay img-fluid z-depth-1"
          src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img(117).jpg"
          alt="zoom"
        >
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
            <button class="full-img-slider" v-on:click="openLightboxOnSlide(4)"></button>
          </mdb-mask>
        </mdb-view>
      </mdb-col>
    </mdb-row>

    <mdb-row>
      <mdb-col md="6" class="m-0 pt-2 pr-0 pb-0">
        <mdb-view
          class="zoom overlay img-fluid z-depth-1"
          src="https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img(117).jpg"
          alt="zoom"
        >
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
            <button class="full-img-slider" v-on:click="openLightboxOnSlide(5)"></button>
          </mdb-mask>
        </mdb-view>
      </mdb-col>

      <mdb-col md="6" class="m-0 pt-2 pl-0 pb-0">
        <mdb-view
          class="zoom overlay img-fluid z-depth-1"
          src="https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img(129).jpg"
          alt="zoom"
        >
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
            <button class="full-img-slider" v-on:click="openLightboxOnSlide(6)"></button>
          </mdb-mask>
        </mdb-view>
      </mdb-col>
    </mdb-row>

    <FsLightbox
      :toggler="toggler"
      :slide="slide"
      type = 'image'
      :sources="[
'https://images.pexels.com/photos/1482193/pexels-photo-1482193.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
'https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img(115).jpg',
'https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img(116).jpg',
'https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img(117).jpg',
'https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img(117).jpg',
'https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img(129).jpg'
]"
    />
  </div>
</template>

<script>
import { mdbRow, mdbCol, mdbView, mdbMask, mdbIcon } from "mdbvue";
import FsLightbox from "fslightbox-vue";

export default {
  components: {
    mdbRow,
    mdbCol,
    mdbView,
    mdbMask,
    mdbIcon,
    FsLightbox,
  },
  data() {
    return {
      toggler: false,
      slide: 1,
    };
  },
  methods: {
    openLightboxOnSlide: function (number) {
      this.slide = number;
      this.toggler = !this.toggler;
    },
  },
};
</script>

<style>
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