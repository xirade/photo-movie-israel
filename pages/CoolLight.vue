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
          <mdb-col md="12" class="m-0  mt-2">
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
                class="full-img-slider" v-on:click="setIndex(0)"></button>
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
                <button class="full-img-slider" v-on:click="setIndex(1)"></button>
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
                <button class="full-img-slider" v-on:click="setIndex(2)"></button>
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
                <button class="full-img-slider" v-on:click="setIndex(3)"></button>
              </mdb-mask>
            </mdb-view>
          </mdb-col>
        </mdb-row>

        <mdb-row>
           <mdb-col md="4" class="m-0 py-2">
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
                <button class="full-img-slider" v-on:click="setIndex(4)"></button>
              </mdb-mask>
            </mdb-view>
          </mdb-col>

          <mdb-col md="5" class="m-0 py-2">
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
                <mdb-col md="3" offsetMd="4" class="m-0 py-2">
            <mdb-view class="zoom overlay">
              <img class="img-fluid z-depth-1" src="~/assets/img/7.jpg" alt="zoom" />
              <mdb-mask waves overlay="white-slight" class="white-text d-flex flex-column">
                <p class="display-5 my-auto mx-auto flex-center">Adventure time</p>
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
import Vue from 'vue'
import CoolLightBox from 'vue-cool-lightbox'
import { mdbRow, mdbCol, mdbView, mdbMask, mdbIcon } from "mdbvue";
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
export default {
  name: "app",
  data: function () {
    return {
      items: [
        'https://res.cloudinary.com/dxeebmzdv/image/upload/v1595950779/1_guaw1o.jpg',
        'https://res.cloudinary.com/dxeebmzdv/image/upload/v1595950915/2_vzvvds.jpg',
        'https://res.cloudinary.com/dxeebmzdv/image/upload/v1595950942/3_haxune.jpg',
        'https://res.cloudinary.com/dxeebmzdv/image/upload/v1595950976/4_r3bmou.jpg',
        'https://res.cloudinary.com/dxeebmzdv/image/upload/v1595950977/5_djhizt.jpg',
        'https://res.cloudinary.com/dxeebmzdv/image/upload/v1595950979/6_bc7f0u.jpg',
        'https://res.cloudinary.com/dxeebmzdv/image/upload/v1595950978/7_qfounv.jpg',
        
      ],
      index: null
    };
  },
   computed: {
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
    .display-5 {
      font-size: 1.5rem;
      font-family: "DINNeuzeitGroteskLTW01-BdCn";
    }
    @media (max-width: 575px) {
      .display-5 {
        font-size: 2.5rem;
      }
    }
      @media (min-width: 576px) and (max-width: 767px) {
        .display-5 {
        font-size: 2.5rem;
      }
      }
    </style>