<template>
  <div>
    <header class="d-flex flex-column">
      <img
        src="https://res.cloudinary.com/dxeebmzdv/image/upload/v1596646320/000_apiqou_bznbq5.png"
        height="120px"
        width="250px"
        class="mx-auto mt-5"
        alt="Logo"
      />

      <div class="service mt-4 position-relative">
          <span
            class="active_line_1"
            data-aos="goLine_media"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
          ></span>
      </div>
      <div class="bg-white container text-black d-flex justify-content-end">
        <div class="service_title mt-5 w-50">
          <p class="display-5 pl-2 text-left font-weight-bolder yellow-text">
            03
          </p>
          <h2 class="display-3 pl-2 font-weight-bold">SHOWCASES</h2>
        </div>
      </div>
    </header>
    <div class="py-5 bg-light">
      <mdb-container>
        <section class="text-center my-5">
          <mdb-row class="d-flex justify-content-center">
            <mdb-col md="6" xl="5" class="mb-4">
              <mdb-view class="newsCard news-Slide-up overlay rounded z-depth-2">
                <img
                  src="https://res.cloudinary.com/dxeebmzdv/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1596231520/0033_bt1acl.jpg"
                  alt="sample photo"
                  class="img-fluid"
                />
                  <mdb-mask waves overlay="black-light">
                    <div class="bg-dark text-white newsCaption">
                      <h4 class="newsCaption-title text-uppercase">Lorem, ipsum dolor.</h4>
                      <p class="newsCaption-content" >November 2018</p>
                    </div>
                  </mdb-mask>
              </mdb-view>
            </mdb-col>
            <mdb-col md="6" xl="5" class="mb-4">
              <mdb-view class="newsCard news-Slide-up overlay rounded z-depth-2">
                <img
                  src="https://res.cloudinary.com/dxeebmzdv/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1596231521/0014_wl1oy3.jpg"
                  alt="sample photo"
                  class="img-fluid"
                />
                <a>
                  <mdb-mask waves overlay="black-light">
                    <div class="bg-dark text-white newsCaption">
                      <h4 class="newsCaption-title text-uppercase">Lorem, ipsum dolor.</h4>
                      <p class="newsCaption-content" >November 2018</p>
                    </div>
                  </mdb-mask>
                </a>
              </mdb-view>
            </mdb-col>
            <mdb-col md="6" xl="5" class="mb-4">
              <mdb-view class="newsCard news-Slide-up overlay rounded z-depth-2">
                <img
                  src="https://res.cloudinary.com/dxeebmzdv/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1596231521/0017_mtb2mn.jpg"
                  alt="sample photo"
                  class="img-fluid"
                />
                <a>
                  <mdb-mask waves overlay="black-light">
                    <div class="bg-dark text-white newsCaption">
                      <h4 class="newsCaption-title text-uppercase">Lorem, ipsum dolor.</h4>
                      <p class="newsCaption-content" >November 2018</p>
                    </div>
                  </mdb-mask>
                </a>
              </mdb-view>
            </mdb-col>
            <mdb-col md="6" xl="5" class="mb-4">
              <mdb-view class="newsCard news-Slide-up overlay rounded z-depth-2">
                <img
                  src="https://res.cloudinary.com/dxeebmzdv/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1596231522/0012_cdvwcm.jpg"
                  alt="sample photo"
                  class="img-fluid"
                />
                <a>
                  <mdb-mask waves overlay="black-light">
                    <div class="bg-dark text-white newsCaption">
                      <h4 class="newsCaption-title text-uppercase">Lorem, ipsum dolor.</h4>
                      <p class="newsCaption-content" >November 2018</p>
                    </div>
                  </mdb-mask>
                </a>
              </mdb-view>
            </mdb-col>
          </mdb-row>
          <h2 class="h1-responsive font-weight-bold my-5">OUR BEST PROJECTS</h2>
          <p class="grey-text w-responsive mx-auto mb-5">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            est laborum.
          </p>
        </section>
      </mdb-container>
    </div>
    <span
            class="active_line_1"
            data-aos="goLine_xsmall"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
          ></span>
  </div>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbView,
  mdbMask,
  mdbCard,
  mdbCardBody,
  mdbBtn,
  mdbIcon
} from "mdbvue";
export default {
  name: "ProjectsPage",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbView,
    mdbMask,
    mdbCard,
    mdbCardBody,
    mdbBtn,
    mdbIcon
  },
};
</script>

<style lang="scss" scoped>
    [data-aos="goLine_media"] {
  height: 0;
  opacity: 0;
  transition-property: height, opacity;

  &.aos-animate {
    height: 230px;
    opacity: 1;
  }
  
}

.newsCard {
  position: relative;
  overflow: hidden;
}

.newsCaption-title {
  margin-top: 0.1rem;
}

.newsCaption {
  position: absolute;
  top: auto;
  bottom: 0;
  opacity: .6;
  left: 0;
  width: 100%;
  height: 20%;
  -webkit-transform: translateY(80%);
          transform: translateY(80%);
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  -webkit-transition: opacity 0.1s 0.3s, -webkit-transform 0.4s;
  transition: opacity 0.1s 0.3s, -webkit-transform 0.4s;
  transition: transform 0.4s, opacity 0.1s 0.3s;
  transition: transform 0.4s, opacity 0.1s 0.3s, -webkit-transform 0.4s;
}

.news-Slide-up:hover .newsCaption {
  opacity: 1;
  -webkit-transform: translateY(0px);
          transform: translateY(0px);
  -webkit-transition: opacity 0.1s, -webkit-transform 0.4s;
  transition: opacity 0.1s, -webkit-transform 0.4s;
  transition: transform 0.4s, opacity 0.1s;
  transition: transform 0.4s, opacity 0.1s, -webkit-transform 0.4s;
}

h2, h4 {
    font-family: "DINNeuzeitGroteskLTW01-BdCn";
}

.display-3 {
  font-size: 3.5rem;
  font-family: "DINNeuzeitGroteskLTW01-BdCn";
}

[data-aos="goLine_xsmall"] {
  height: 0;
  opacity: 0;
  transition-property: height, opacity;

  &.aos-animate {
    height: 40px;
    opacity: 1;
  }
}

@media (min-width: 320px) and (max-width: 574px) {
  .display-3 {
    font-size: 2rem;
  }
}

@media (max-width: 575px) {
  .display-3 {
    font-size: 2rem;
  }
  .newsCaption{
    height: 20%;
  }
}
@media (min-width: 576px) and (max-width: 767px) {
  .display-3 {
    font-size: 2rem;
  }
  .newsCaption{
    height: 15%;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .newsCaption{
    height: 25%;
  }
}
</style>
