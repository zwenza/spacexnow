<template>
  <b-navbar toggleable="md" type="dark" variant="info">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand href="#">SpaceInfo 🚀</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item router-link to="/launches">Launches</b-nav-item>
          <b-nav-item router-link to="/agencies">Agencies</b-nav-item>
        </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
export default {
  name: 'sp-navigation'
};
</script>
