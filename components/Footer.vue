<template>
<client-only>
   <mdb-footer color="mdb-color" class="font-small elegant-color-dark pt-4" style="margin-top: 0 !important;">
    <mdb-container class="text-center text-md-left">
      <mdb-row class="my-4">
        <mdb-col md="4" lg="4">
          <h5 class="text-uppercase mb-4 font-weight-bold grey-text">Desctiption organization</h5>
          <p>Here you can use rows and columns here to organize your footer content.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident
              voluptate esse quasi, veritatis totam voluptas nostrum. </p>
        </mdb-col>
        <hr class="clearfix w-100 d-md-none"/>
        <mdb-col md="2" lg="2" class="ml-auto">
          <h5 class="text-uppercase mb-4 font-weight-bold grey-text">About</h5>
          <ul class="list-unstyled">
            <p><router-link tag="a" to="/Service">SERVICE</router-link></p>
            <p><router-link tag="a" to="/About">ABOUT</router-link></p>
            <p><router-link tag="a" to="/Media">MEDIA</router-link></p>
            <p><router-link tag="a" to="/Portfolio">PORTFOLIO</router-link></p>
            <p><router-link tag="a" to="/Contacts">CONTACTS</router-link></p>
          </ul>
        </mdb-col>
        <hr class="clearfix w-100 d-md-none"/>
        <mdb-col md="5" lg="3">
          <h5 class="text-uppercase mb-4 font-weight-bold grey-text">ADRESS:</h5>
          <p><mdb-icon icon="home" class="mr-3" /> Israel, Maale-Adumim, HaNevel st.23, ap.6</p>
          <p><mdb-icon icon="envelope" class="mr-3" />  pawel.milov@gmail.com</p>
          <p><mdb-icon icon="phone" class="mr-3" /> +972506786932</p>
        </mdb-col>
        <hr class="clearfix w-100 d-md-none"/>
        <mdb-col md="2" lg="2" class="text-center">
          <h5 class="text-uppercase mb-4 font-weight-bold grey-text">FOLLOW US: </h5>
          <div class="mt-2 ">
            <a type="button" class="btn-floating btn-small btn-fb"><mdb-icon fab icon="facebook" size="2x" /></a>
            <a type="button" class="btn-floating btn-small btn-in"><mdb-icon fab icon="instagram" size="2x" /></a>
            <a type="button" class="btn-floating btn-small btn-you"><mdb-icon fab icon="youtube" size="2x" /></a>
            <a type="button" class="btn-floating btn-small btn-sapp"><mdb-icon fab icon="whatsapp" size="2x" /></a>
          </div>
        </mdb-col>
        <hr class="clearfix w-100 d-md-none"/>
      </mdb-row>
    </mdb-container>
    <div class="footer-copyright text-center py-3">
      <mdb-container fluid>
          &copy; 2020 Copyright: <a href="#"> PMI </a>. All rights reserved
      </mdb-container>
    </div>
  </mdb-footer>
</client-only>
</template>

<script>
  import { mdbFooter, mdbContainer, mdbRow, mdbCol, mdbIcon } from 'mdbvue';
  export default {
    name: 'FooterPage',
    components: {
      mdbFooter,
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbIcon
    }
  }
</script>

<style>

</style>