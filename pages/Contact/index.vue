<template>
  <div>
    <header class="d-flex flex-column bg-white">
      <img
        src="https://res.cloudinary.com/dxeebmzdv/image/upload/v1596646320/000_apiqou_bznbq5.png"
        height="120px"
        width="250px"
        class="mx-auto mt-5"
        alt="Logo"
      />

      <div
        class="bg-white container text-black d-flex justify-content-end position-relative mt-4"
      >
        <span
          class="active_line_1"
          data-aos="goLine_contacts"
          data-aos-duration="1000"
          data-aos-easing="ease-out"
        ></span>
        <div class="service_title mt-5 w-50">
          <p class="display-5 pl-2 text-left font-weight-bolder yellow-text">
            04
          </p>
          <h2 class="display-3 pl-2 font-weight-bold text-uppercase">
            Contact
          </h2>
        </div>
      </div>
    </header>
    <main class="bg-light">
      <mdb-container class="py-5">
        <section class="my-5">
          <mdb-row>
            <mdb-col lg="5" class="lg-0 mb-4">
              <mdb-alert color="warning" class="align-center" v-if="isBot">
                <p>Awesome! I think you are the bot! I've destroyed the form from
                the page, so you can try again to fill it again, just refresh
                the page.</p>
              </mdb-alert>
              <!-- Then we show the rest of the component if not. -->
              <div v-else>
                <mdb-alert
                  v-if="success"
                  color="success"
                  @closeAlert="success = false"
                  dismiss
                >
                  <strong>Thanks for contacting us!</strong> Your message has
                  been sent successfully. We have received your inquiry and will
                  respond to you within 24 hours.
                </mdb-alert>
                <mdb-card>
                  <mdb-card-body>
                    <div class="form-header white accent-1">
                      <h3 class="mt-2">
                        <mdb-icon icon="envelope" />Write to us:
                      </h3>
                    </div>
                    <p class="dark-grey-text pb-2">
                      We'll write rarely, but only the best content.
                    </p>
                    <form @submit.prevent="sendMessage">
                      <div class="md-form">
                        <mdb-input
                          icon="user"
                          v-model="name"
                          label="Your name"
                          id="name"
                          required
                        />
                      </div>
                      <div class="md-form">
                        <mdb-input
                          v-model="email"
                          icon="envelope"
                          label="Your email"
                          id="email"
                          required
                        />
                      </div>
                      <div class="md-form">
                        <mdb-input
                          v-model="phone"
                          icon="phone"
                          label="Your phone"
                          type="tel"
                          id="phone"
                          required
                        />
                      </div>
                      <div class="md-form">
                        <mdb-input
                          v-model="message"
                          icon="tag"
                          label="Subject"
                          type="text"
                          id="message"
                          required
                        />
                      </div>
                      <div class="text-center">
                        <mdb-btn type="submit" color="warning">
                          {{ loading ? "Sending Message..." : "Send message" }}
                        </mdb-btn>
                      </div>
                    </form>
                  </mdb-card-body>
                </mdb-card>
              </div>
            </mdb-col>
            <mdb-col lg="7">
              <div
                id="map-container"
                class="rounded z-depth-1-half map-container"
                style="height: 400px"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3391.47995395522!2d35.296616215157165!3d31.784667081283057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x150329546c0ca129%3A0x2bab46dc5b18c5b1!2sHaNevel%2023%2C%20Ma&#39;ale%20Adumim!5e0!3m2!1sen!2sil!4v1596950459328!5m2!1sen!2sil"
                  width="100%"
                  height="100%"
                  frameborder="0"
                  style="border: 0;"
                  allowfullscreen
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
              <br />
            </mdb-col>
          </mdb-row>
        </section>
      </mdb-container>
      <div class="position-relative">
        <span
          class="active_line_1"
          data-aos="goLine_xsmall"
          data-aos-duration="1000"
          data-aos-easing="ease-out"
        ></span>
      </div>
    </main>
  </div>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbAlert,
  mdbBtn,
  mdbIcon,
  mdbInput,
  mdbTextarea,
  mdbCard,
  mdbCardBody
} from "mdbvue";
export default {
  name: "ContactPage",
  data() {
    return {
      loading: false,
      success: false,
      errored: false,
      close: true,
      isBot: false,
      bot: null,
      name: "",
      email: "",
      phone: "",
      message: ""
    };
  },
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBtn,
    mdbAlert,
    mdbIcon,
    mdbInput,
    mdbTextarea,
    mdbCard,
    mdbCardBody
  },
  methods: {
    sendMessage() {
      this.loading = true;
      /* This is where I check if the bot field has a value. */
      if (this.bot != null) {
        this.isBot = true;
      } else {
        this.$axios
          .post("/contact-mes", {
            name: this.name,
            email: this.email,
            phone: this.phone,
            message: this.message
          })
          .then(response => {
            this.success = true;
            this.errored = false;
          })
          .catch(error => {
            this.errored = true;
          })
          .finally(() => {
            this.loading = false;
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
h2,
h3,
.display-3 {
  font-family: "Oswald", sans-serif;
}

.card {
  background-color: #fff;
}

.display-3 {
  font-size: 3.5rem;
}

.active_line_1 {
  width: 4px;
  position: absolute;
  left: 50%;
  overflow: hidden;
  background-color: rgba(255, 196, 46, 0.8);
}

[data-aos="goLine_contacts"] {
  height: 0;
  opacity: 0;
  transition-property: height, opacity;

  &.aos-animate {
    height: 230px;
    opacity: 1;
  }
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

@media (max-width: 575px) {
  .display-3 {
    font-size: 2rem;
  }
}

@media (min-width: 576px) and (max-width: 767px) {
  .display-3 {
    font-size: 2.5rem;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .display-3 {
    font-size: 2.5rem;
  }
}
</style>
