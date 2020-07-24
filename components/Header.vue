<template>
<client-only>
  <mdb-navbar color="font-medium p-auto elegant-color-dark" dark>
    <mdb-navbar-toggler>
      <mdb-navbar-nav class="mx-auto">
        <mdb-nav-item class="pr-5" active
          > Home</mdb-nav-item
        >
        <mdb-nav-item class="pr-5"
          >Services</mdb-nav-item
        >
        <mdb-nav-item class="pr-5"
          >About</mdb-nav-item
        >
       <mdb-nav-item class="pr-5"
          >Media</mdb-nav-item
        >
        <mdb-dropdown tag="li" class="nav-item">
          <mdb-dropdown-toggle class="white-text pr-5" tag="a" navLink color="elegant-color-dark" slot="toggle" waves-fixed>Portfolio</mdb-dropdown-toggle>
          <mdb-dropdown-menu>
            <mdb-dropdown-item>Photomodels</mdb-dropdown-item>
       <mdb-dropdown-item>Street</mdb-dropdown-item>
       <mdb-dropdown-item>Family</mdb-dropdown-item>
        <mdb-dropdown-item>Wedding</mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
       <mdb-nav-item>Contacts</mdb-nav-item>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</client-only>
</template>

<script>
import {
  mdbNavbar,
  mdbNavbarToggler,
  mdbNavbarNav,
  mdbNavItem,
  mdbDropdown,
  mdbDropdownToggle,
  mdbDropdownItem,
  mdbDropdownMenu
} from "mdbvue";
export default {
  name: 'HeaderPage',
  components: {
    mdbNavbar,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
    mdbDropdown,
    mdbDropdownToggle,
    mdbDropdownItem,
    mdbDropdownMenu
  }
};
</script>