<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="dark"
      style="background-color: #212121 !important"
    >
        <b-navbar-toggle class="ml-auto" target="navbar-toggle-collapse">
          <template v-slot:default="{ expanded }">
            <b-icon v-if="expanded" scale="2" icon="toggle-on"></b-icon>
            <b-icon v-else scale="2" icon="toggle-off"></b-icon>
          </template>
        </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="container w-50 mx-auto text-center">
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/services">Services</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
          <b-nav-item-dropdown text="Portfolio" toggle-class="nav-link-custom">
            <b-dropdown-item
              to="/portfolio/aerophotos"
              class="drop-list text-center"
              >Aerophotos</b-dropdown-item
            >
            <b-dropdown-item to="/portfolio/street" class="drop-list text-center"
              >Street</b-dropdown-item
            >
            <b-dropdown-item to="/portfolio/family" class="drop-list text-center"
              >Family</b-dropdown-item
            >
            <b-dropdown-item
              to="/portfolio/wedding"
              class="drop-list text-center"
              >Wedding</b-dropdown-item
            >
          </b-nav-item-dropdown>
          <b-nav-item to="/contact">Contact</b-nav-item>
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
  BNavItem,
} from "bootstrap-vue";
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
    BNavItem,
  },
};
</script>

<style lang="scss" >
.navbar {
  z-index: 1020;
  box-shadow: 0px 0px 5px rgba(245, 245, 245, 0.5);
}

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
    background-color: #212121 !important;
    color: #ffffff;
  }
  .navbar {
    width: 100%;
    position: fixed;
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
    background-color: #212121 !important;
    color: #ffffff;
  }
  .navbar {
    width: 100%;
    position: fixed;
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
    background-color: #212121 !important;
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
    position: fixed;
    top: 0;
    z-index: 1020;
  }
}

@media (min-width: 992px) and (max-width: 1199.98px) {
  .navbar .dropdown-menu {
    position: absolute !important;
    margin-top: 45px;
    background-color: white !important;
  }
  .drop-list {
    width: 100% !important;
    text-align: left !important;
  }
  .navbar-nav {
    width: 75% !important;
  }
  .navbar .dropdown-menu {
    margin-top: 40px;
  }
  ul.navbar-nav li.dropdown:hover ul.dropdown-menu {
    display: block;
  }
}

@media (min-width: 1200px) {
  .navbar .dropdown-menu {
    background-color: #212121;
    position: absolute !important;
    background-color: white !important;
    margin-top: 40px;
  }
  .drop-list {
    width: 100% !important;
    text-align: left !important;
  }
  ul.navbar-nav li.dropdown:hover ul.dropdown-menu {
    display: block;
  }
}
</style>