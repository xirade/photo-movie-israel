<template>
  <div>
    <mdb-footer
      color="mdb-color"
      class="font-small elegant-color-dark pt-4"
      style="margin-top: 0 !important;"
    >
      <mdb-container class="text-center mx-auto text-md-left">
        <mdb-row class="my-4 ">
          <mdb-col md="3" lg="4">
            <h5 class="text-uppercase mb-4 font-weight-bold grey-text">
              {{ $i18n.locale == "en" ? "Desctiption organization" : "Описание организации" }}
            </h5>
            <p>
              {{
                $i18n.locale == "en"
                  ? "I make videos and photos of any format, from a staged film to shooting an event. Shooting from a quadcopter is possible."
                  : "Делаю видео и фото любого формата от постановочного фильма до съемки мероприятия. Возможна съемка с квадрокоптера."
              }}
            </p>
          </mdb-col>
          <hr class="clearfix w-100 d-md-none" />
          <mdb-col md="3" lg="2" class="mx-auto">
            <h5 class="text-uppercase mb-4 font-weight-bold grey-text">
              {{ $i18n.locale == "en" ? "Resources" : "Ресурсы" }}
            </h5>
            <ul class="list-unstyled">
              <NuxtLink
                class="text-uppercase"
                :to="{ name: `index___${$i18n.locale}` }"
              >
                <p>
                  {{ $i18n.locale == "en" ? "Home" : "Главная" }}
                </p>
              </NuxtLink>
              <NuxtLink
                class="text-uppercase"
                :to="{ name: `services___${$i18n.locale}` }"
              >
                <p>
                  {{ $i18n.locale == "en" ? "Services" : "Сервисы" }}
                </p>
              </NuxtLink>
              <NuxtLink
                class="text-uppercase"
                :to="{ name: `about___${$i18n.locale}` }"
              >
                <p>
                  {{ $i18n.locale == "en" ? "About" : "О нас" }}
                </p>
              </NuxtLink>
              <NuxtLink
                class="text-uppercase"
                :to="{ name: `portfolio___${$i18n.locale}` }"
              >
                <p>
                  {{ $i18n.locale == "en" ? "Portfolios" : "Портфолио" }}
                </p>
              </NuxtLink>
              <NuxtLink
                class="text-uppercase"
                :to="{ name: `contact___${$i18n.locale}` }"
              >
                <p>
                  {{ $i18n.locale == "en" ? "Contact" : "Контакты" }}
                </p>
              </NuxtLink>
            </ul>
          </mdb-col>
          <hr class="clearfix w-100 d-md-none" />
          <mdb-col md="5" lg="3">
            <h5 class="text-uppercase mb-4 font-weight-bold grey-text">
              {{ $i18n.locale == "en" ? "Adress:" : "Адреса" }}
            </h5>
            <ul class="list-unstyled">
              <p>
                <a href="https://goo.gl/maps/o7bshSNLDHgjWBh16" target="_black"
                  ><mdb-icon icon="home" class="mr-3" /> Israel, Maale-Adumim,
                  HaNevel st.23, ap.13</a
                >
              </p>
              <p>
                <a href="mailto:pawel.milov@gmail.com" target="_black"
                  ><mdb-icon icon="envelope" class="mr-3" />
                  pawel.milov@gmail.com</a
                >
              </p>
              <p>
                <a
                  href="https://api.whatsapp.com/send?phone=972506786932"
                  target="_black"
                  ><mdb-icon icon="phone" class="mr-3" /> +972506786932</a
                >
              </p>
            </ul>
          </mdb-col>
          <hr class="clearfix w-100 d-md-none" />
          <mdb-col md="3" lg="2" class="follow-us">
            <h5 class="text-uppercase mb-4 font-weight-bold grey-text">
              {{ $i18n.locale == "en" ? "Follow us" : "Подпишись" }}
            </h5>
            <div class="mt-2 ">
              <a
                class="fb-ic"
                target="_blank"
                href="https://www.facebook.com/PhotoVideoIsrael/"
                ><i class="fab fa-facebook fa-lg white-text mr-2"> </i
              ></a>
              <a
                class="ins-ic"
                target="_blank"
                href="https://www.instagram.com/pashamily/"
                ><i class="fab fa-instagram fa-lg white-text mr-2"> </i
              ></a>
              <a
                class="wts-ic"
                target="_blank"
                href="https://api.whatsapp.com/send?phone=972506786932"
                ><i class="fab fa-whatsapp fa-lg white-text mr-2"> </i
              ></a>
              <a
                class="you-ic"
                target="_blank"
                href="https://www.youtube.com/channel/UCuK3rKJhAxZDfC9adkRFG_A/"
                ><i class="fab fa-youtube fa-lg white-text mr-2"> </i
              ></a>
            </div>
          </mdb-col>
          <hr class="clearfix w-100 d-md-none" />
        </mdb-row>
      </mdb-container>
      <div class="footer-copyright text-center py-3">
        <mdb-container fluid>
          &copy; {{ currentDate.getFullYear() }} Copyright:
          <a href="#"> Photo-Movie-Israel </a>. All rights reserved
        </mdb-container>
      </div>
    </mdb-footer>
  </div>
</template>

<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol, mdbIcon } from "mdbvue";
export default {
  name: "FooterPage",
  data() {
    return {
      currentDate: new Date()
    };
  },
  components: {
    mdbFooter,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon
  }
};
</script>

<style>
@media (min-width: 768px) and (max-width: 991px) {
  .follow-us {
    margin: 0 auto;
  }
}
</style>
