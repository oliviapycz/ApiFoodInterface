<template>
  <div class="container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">AπFood</a>
        <button class="button navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <nuxt-link class="navbar-item" to="/signin">Sign In</nuxt-link>
          <nuxt-link class="navbar-item" to="/signup">Sign Up</nuxt-link>
        </div>
      </div>
    </nav>
  </div>
</template>

