<template>
  <div id="app">
    <CoolLightBox 
      :items="items" 
      :index="index"
      loop
      @close="index = null">
    </CoolLightBox>
    <div 
    >
           <mdb-row>
          <mdb-col md="12" class="m-0 pb-2 pt-0 mt-2">
            <mdb-view class="zoom overlay">
              <img class="img-fluid z-depth-1" src="~/assets/img/1.jpg" alt="zoom" />
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
                <button  
                class="full-img-slider" v-on:click="setIndex(1)"></button>
              </mdb-mask>
            </mdb-view>
          </mdb-col>
        </mdb-row>
    
        <mdb-row>
          <mdb-col md="4" class="m-0 py-2">
            <mdb-view class="zoom overlay">
              <img class="img-fluid z-depth-1" src="~/assets/img/2.jpg" alt="zoom" />
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
                <button class="full-img-slider" v-on:click="setIndex(2)"></button>
              </mdb-mask>
            </mdb-view>
          </mdb-col>
    
          <mdb-col md="4" class="m-0 py-2">
            <mdb-view class="zoom overlay">
              <img class="img-fluid z-depth-1" src="~/assets/img/3.jpg" alt="zoom" />
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
                <button class="full-img-slider" v-on:click="setIndex(3)"></button>
              </mdb-mask>
            </mdb-view>
          </mdb-col>
    
          <mdb-col md="4" class="m-0 py-2">
            <mdb-view class="zoom overlay">
              <img class="img-fluid z-depth-1" src="~/assets/img/4.jpg" alt="zoom" />
              <mdb-mask waves overlay="white-slight" class="white-text d-flex flex-column">
                <p class="display-3 my-auto mx-auto flex-center" style>Adventure time</p>
                <div class="tool-icon ml-2 mb-2">
                  <a href="#!" class="icon-feedback">
                    <mdb-icon far size="lg" icon="heart" />13
                  </a>
                  <a href="#!" class="icon-feedback">
                    <mdb-icon size="lg" icon="comment" />25
                  </a>
                </div>
                <button class="full-img-slider" v-on:click="setIndex(4)"></button>
              </mdb-mask>
            </mdb-view>
          </mdb-col>
        </mdb-row>
    
        <mdb-row>
          <mdb-col md="6" class="m-0 py-2">
            <mdb-view class="zoom overlay">
              <img class="img-fluid z-depth-1" src="~/assets/img/5.jpg" alt="zoom" />
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
                <button class="full-img-slider" v-on:click="setIndex(5)"></button>
              </mdb-mask>
            </mdb-view>
          </mdb-col>
    
          <mdb-col md="6" class="m-0 py-2">
            <mdb-view class="zoom overlay">
              <img class="img-fluid z-depth-1" src="~/assets/img/6.jpg" alt="zoom" />
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
                <button class="full-img-slider" v-on:click="setIndex(6)"></button>
              </mdb-mask>
            </mdb-view>
          </mdb-col>
        </mdb-row>
      </div>
  </div>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import { mdbRow, mdbCol, mdbView, mdbMask, mdbIcon } from "mdbvue";
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
export default {
  name: "app",
  data: function () {
    return {
      items: [
        {src:'~/assets/img/1.jpg'},
        {src:'~/assets/img/2.jpg'},
        {src:'~/assets/img/3.jpg'},
        {src:'~/assets/img/4.jpg'},
        {src:'~/assets/img/5.jpg'},
        {src:'~/assets/img/6.jpg}'}
      ],
      index: null
    };
  },
  components: {
    CoolLightBox,
    mdbRow,
        mdbCol,
        mdbView,
        mdbMask,
        mdbIcon
  },
  methods: {
    setIndex(index) {
      this.index = index
    }
  }
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
    .tool-icon {
      z-index: 1;
    }
    </style>