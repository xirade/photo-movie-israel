<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" style="background-color: #212121 !important" >
    <b-navbar-toggle class="ml-auto"  target="navbar-toggle-collapse" >
       <template v-slot:default="{ expanded }">
        <b-icon v-if="expanded" scale="2" icon="toggle-on"></b-icon>
        <b-icon v-else scale="2" icon="toggle-off"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="mx-auto text-center">
        <b-nav-item class="mr-5" href="#">Home</b-nav-item>
        <b-nav-item class="mr-5" href="#">Services</b-nav-item>
        <b-nav-item class="mr-5" href="#">About</b-nav-item>
        <b-nav-item class="mr-5" href="#">Media</b-nav-item>
         <b-nav-item-dropdown class="mr-5" text="Portfolio" style="position-relative;">
          <b-dropdown-item href="#" class="drop-list text-center w-75 mx-auto">Photomodels</b-dropdown-item>
          <b-dropdown-item href="#" class="drop-list text-center w-75 mx-auto">Street</b-dropdown-item>
          <b-dropdown-item href="#" class="drop-list text-center w-75 mx-auto">Family</b-dropdown-item>
          <b-dropdown-item href="#" class="drop-list text-center w-75 mx-auto">Wedding</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item class="mr-5" href="#">Contacts</b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>
import {
  BIcon,
  BIconToggleOff,
  BIconToggleOn,
  BNavItemDropdown,
  BDropdownItem,
  BNavbar,
  BNavbarToggle,
  BCollapse,
  BNavbarNav,
  BNavItem
} from 'bootstrap-vue';
export default {
  components: {
  BIconToggleOn,
  BIconToggleOff,
  BIcon,
  BNavItemDropdown,
  BDropdownItem,
  BNavbar,
  BNavbarToggle,
  BCollapse,
  BNavbarNav,
  BNavItem
  },
  data() {
    return {
    }
  }
}

</script>

<style lang="scss" >

@media (max-width: 575.98px) { 
    .navbar .dropdown-menu {
      background-color: #212121;
      margin: 0;
      border: none;
    }
    .navbar .dropdown-menu a:not(.active) {
      color: #6c757d;
    }
    a .dropdown-item:hover {
      background-color: #212121;
      color: #ffffff;
    }
    .navbar {
      position: sticky;
      top: 0;
      z-index: 1020;
    }
 }

@media (min-width: 576px) and (max-width: 767.98px) { 
    .navbar .dropdown-menu {
      background-color: #212121;
      margin: 0;
      border: none;
    }
    .navbar .dropdown-menu a:not(.active) {
      color: #6c757d;
    }
    a .dropdown-item:hover {
      background-color: #212121;
      color: #ffffff;
    }
    .navbar {
      position: sticky;
      top: 0;
      z-index: 1020;
    }

 }

@media (min-width: 768px) and (max-width: 991.98px) { 
    .navbar .dropdown-menu {
      background-color: #212121;
      margin: 0;
      border: none;
    }
    a .dropdown-item:hover {
      background-color: #212121;
      color: #ffffff;
    }
    .navbar .dropdown-menu a:not(.active) {
      color: #ffffff;
    }
  .navbar .dropdown-menu a:not(.active) {
      color: #6c757d;
    }
    .navbar {
      position: sticky;
      top: 0;
      z-index: 1020;
    }
}

@media (min-width: 992px) and (max-width: 1199.98px) { 
  .navbar .dropdown-menu{
    position: absolute !important;
    margin-top: 45px;
    background-color: white !important;
  }
  .drop-list  {
    width: 100% !important;
    text-align: left !important;
  }
}

@media (min-width: 1200px) { 
  .navbar .dropdown-menu{
    position: absolute !important;
    background-color: white !important;
    margin-top: 45px;
  }
  .drop-list  {
    width: 100% !important;
    text-align: left !important;
  }
}
</style>