<template>
  <div>

    <section class="landingpage">
      <div>
        <app-logo/>
        <h1 class="title">
          Api Food Interface
        </h1>
        <h2 class="subtitle">
          An Open Source Project
        </h2>
        <div class="links">
          <a
            href="#landingpage1"
            class="button--green">How it works?</a>
          <a
            href="#landingpage2"
            class="button--maroon">How to help?</a>
        </div>
      </div>
    </section>

    <section id="landingpage1" class="landingpage1">
      <h2>How it works</h2>
    </section>

    <section id="landingpage2" class="landingpage2">
      <h2>How to help</h2>
    </section>

  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style>
.landingpage {
  min-height: 93vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.landingpage1 {
  background-color: lightgrey;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.landingpage2 {
  background-color: lightblue;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

