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
              <video class="video-fluid z-depth-1" autoplay loop muted>
      <source src="https://res.cloudinary.com/dxeebmzdv/video/upload/v1595969486/%D0%B4%D1%80%D0%BE%D0%BD_aonvwi.mp4" type="video/mp4" />
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
                <button  
                class="full-img-slider" v-on:click="setIndex(0)"></button>
              </mdb-mask>
            </mdb-view>
          </mdb-col>
        </mdb-row>
    
        <mdb-row>
          <mdb-col md="4" class="m-0 py-2">
            <mdb-view class="zoom overlay">
              <img class="img-fluid z-depth-1" :src="items[1]" alt="zoom" />
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
    
          <mdb-col md="5" class="m-0 py-2">
            <mdb-view class="zoom overlay">
              <img class="img-fluid z-depth-1" :src="items[2]" alt="zoom" />
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
    
          <mdb-col md="3" class="py-2">
            <mdb-view class="zoom overlay">
              <img class="img-fluid z-depth-1" :src="items[3]" alt="zoom" />
              <mdb-mask waves overlay="white-slight" class="white-text d-flex flex-column">
                <p class="display-5 my-auto mx-auto flex-center" style>Adventure time</p>
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
              <mdb-col md="5" class="m-0 py-2">
            <mdb-view class="zoom overlay">
              <img class="img-fluid z-depth-1" :src="items[4]" alt="zoom" />
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
           <mdb-col md="4" class="m-0 py-2">
            <mdb-view class="zoom overlay">
              <img class="img-fluid z-depth-1" :src="items[5]" alt="zoom" />
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
                <mdb-col md="3" class="m-0 py-2">
            <mdb-view class="zoom overlay">
              <img class="img-fluid z-depth-1" :src="items[6]" alt="zoom" />
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
        'https://res.cloudinary.com/dxeebmzdv/image/upload/v1595970088/0026_nfvrt1.jpg',
        'https://res.cloudinary.com/dxeebmzdv/image/upload/v1595963380/0018_dmrxjg.jpg',
        'https://res.cloudinary.com/dxeebmzdv/image/upload/v1595950976/4_r3bmou.jpg',
        'https://res.cloudinary.com/dxeebmzdv/image/upload/c_fit,h_2400/v1595950979/6_bc7f0u.jpg',
        'https://res.cloudinary.com/dxeebmzdv/image/upload/c_fit,h_2400/v1595963375/0013_rg5rks.jpg',
        'https://res.cloudinary.com/dxeebmzdv/image/upload/c_scale,h_2400/v1595963385/0010_yjpe42.jpg',
        'https://res.cloudinary.com/dxeebmzdv/image/upload/c_scale,h_2400/v1595963382/0011_ogxbtk.jpg',
        'https://res.cloudinary.com/dxeebmzdv/image/upload/v1595963391/008_qigms0.jpg',
        'https://res.cloudinary.com/dxeebmzdv/image/upload/v1595950978/7_qfounv.jpg',
        'https://res.cloudinary.com/dxeebmzdv/image/upload/v1595970338/0022_qjziqy.jpg',
        'https://res.cloudinary.com/dxeebmzdv/image/upload/v1595970339/0035_rgph7p.jpg',
        'https://res.cloudinary.com/dxeebmzdv/image/upload/v1595970342/0030_vvllm8.jpg',
        'https://res.cloudinary.com/dxeebmzdv/image/upload/v1595970343/0031_chkk3y.jpg',
        'https://res.cloudinary.com/dxeebmzdv/image/upload/v1595970345/0032_z18xq2.jpg'
        
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