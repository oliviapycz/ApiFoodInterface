<template>
  <section class="container" style="min-height:70vh">
    <h2 class="title">
        Sign Up
    </h2>
    
    <div class="columns is-centered">
      <form action="" method="post" class=" column is-half">

        <div class="field">
          <label class="label">Username</label>
          <div class="control has-icons-left">
            <input class="input is-success" type="text" placeholder="Your username">
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </div>
            <!-- <p class="help is-danger">This email is invalid</p> -->
        </div>

        <div class="field">
          <label class="label">Email</label>
          <div class="control has-icons-left">
            <input class="input is-success" type="email" placeholder="Your Email">
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </div>
          <!-- <p class="help is-danger">This email is invalid</p> -->
        </div>

        <div class="field">
          <label class="label">Password</label>
          <div class="control has-icons-left">
            <input class="input is-success" type="text" placeholder="Your password">
            <span class="icon is-small is-left">
              <i class="fas fa-key"></i>
            </span>
          </div>
            <!-- <p class="help is-danger">This email is invalid</p> -->
        </div>

        <div class="field">
          <label class="label">Retape Password</label>
          <div class="control has-icons-left">
            <input class="input is-success" type="text" placeholder="Retape your password">
            <span class="icon is-small is-left">
              <i class="fas fa-key"></i>
            </span>
          </div>
            <!-- <p class="help is-danger">This email is invalid</p> -->
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-success is-link">Submit</button>
          </div>
          <div class="control">
            <button class="button is-text">Cancel</button>
          </div>
        </div>

      </form>
    </div>
  </section>
</template>

<style>
  .title {
    display: flex;
    justify-content: center;
  }
</style>

