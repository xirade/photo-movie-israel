<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="dark"
      style="background-color: #212121 !important"
    >
      <b-navbar-toggle
        @click="rotateBar"
        class="ml-auto"
        target="navbar-toggle-collapse"
      >
        <template v-slot:default="{ expanded }">
          <b-icon v-if="expanded" class="rotate down" scale="2" icon="three-dots"></b-icon>
          <b-icon v-else class="rotate" scale="2" icon="three-dots"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse
        v-model="isNavbarCollapseOpen"
        id="navbar-toggle-collapse"
        is-nav
      >
        <b-navbar-nav class="container mx-auto text-center">
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/services">Services</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
          <b-nav-item-dropdown text="Portfolio" toggle-class="nav-link-custom">
            <b-dropdown-item
              :to="{name: 'Portfolio-id', params: {id: 1}}"
              class="drop-list text-center"
              >Clips</b-dropdown-item
            >
            <b-dropdown-item
              :to="{name: 'Portfolio-id', params: {id: 2}}"
              class="drop-list text-center"
              >Still-life</b-dropdown-item
            >
            <b-dropdown-item
              :to="{name: 'Portfolio-id', params: {id: 3}}"
              class="drop-list text-center"
              >Branding</b-dropdown-item
            >
            <b-dropdown-item
              :to="{name: 'Portfolio-id', params: {id: 4}}"
              class="drop-list text-center"
              >Family</b-dropdown-item
            >
          </b-nav-item-dropdown>
          <b-nav-item to="/contact">Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div
      v-if="isNavbarCollapseOpen"
      @click="closeCollapse"
      class="navbar-backdrop"
    ></div>
  </div>
</template>

<script>
import {
  BIcon,
  BIconThreeDots,
  BIconThreeDotsVertical,
  BNavItemDropdown,
  BDropdownItem,
  BNavbar,
  BNavbarToggle,
  BCollapse,
  BNavbarNav,
  BNavItem
} from "bootstrap-vue";
export default {
  components: {
    BIconThreeDots,
    BIconThreeDotsVertical,
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
      isNavbarCollapseOpen: false
    };
  },
  methods: {
    rotateBar() {
      let rotate = document.querySelector(".rotate");
      rotate.classList.remove("up")
      rotate.classList.toggle("down");
    },
    closeCollapse(){
      let rotate = document.querySelector(".rotate");
      rotate.classList.remove("down")
      rotate.classList.toggle("up");
      this.isNavbarCollapseOpen = false
    }
  }
};
</script>

<style lang="scss">
.rotate {
  -moz-transition: all 0.25s linear;
  -webkit-transition: all 0.25s linear;
  transition: all 0.25s linear;
}
.rotate.down {
  -moz-transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}
.rotate.up {
  -moz-transform: rotate(0);
  -webkit-transform: rotate(0);
  transform: rotate(0);
}

.navbar {
  z-index: 1020;
}

.navbar-backdrop {
  z-index: 1019;
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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
