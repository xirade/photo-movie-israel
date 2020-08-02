<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="dark" style="background-color: #212121 !important" >
    <b-navbar-toggle class="ml-auto"  target="navbar-toggle-collapse" >
       <template v-slot:default="{ expanded }">
        <b-icon v-if="expanded" scale="2" icon="toggle-on"></b-icon>
        <b-icon v-else scale="2" icon="toggle-off"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="container w-50 mx-auto text-center">
        <b-nav-item :to="{path: '/'}">Home</b-nav-item>
        <b-nav-item :to="{path: '/Services'}">Services</b-nav-item>
        <b-nav-item :to="{path: '/About'}">About</b-nav-item>
        <b-nav-item :to="{path: '/Showcases'}">Showcases</b-nav-item>
         <b-nav-item-dropdown  text="Portfolio" style="position-relative;">
          <b-dropdown-item :to="{path: '/Portfolio'}" class="drop-list text-center">Photomodels</b-dropdown-item>
          <b-dropdown-item href="#" class="drop-list text-center">Street</b-dropdown-item>
          <b-dropdown-item href="#" class="drop-list text-center">Family</b-dropdown-item>
          <b-dropdown-item href="#" class="drop-list text-center">Wedding</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item href="#">Contacts</b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</div>
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
      width: 100%;
      position:fixed;
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
      width: 100%;
      position:fixed;
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
      width: 100%;
      position:fixed;
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
  .navbar-nav {
    width: 75% !important;
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