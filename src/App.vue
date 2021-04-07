<template>
  <div id="app">
    <nav class="uk-navbar-container uk-margin" uk-navbar>
      <div class="uk-navbar-left">

      <a class="uk-navbar-item uk-logo logo" href="#">S</a>
      </div>
      <div class="uk-navbar-center">
      <ul class="uk-navbar-nav">
            <li>
                <router-link to="/">>
                    <span class="uk-icon uk-margin-small-right"></span>
                    Orders
                </router-link>
            </li>
            <li>
                <router-link to="/about">
                  <span class="uk-icon uk-margin-small-right"></span>Order Types  
                </router-link>
            </li>
      </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class App extends Vue {}
</script>

<style>
.uk-navbar-container {
  background-color: chartreuse !important;
}

.logo {
  background-color: white;
  color: chartreuse !important;
  font-weight: bold;
  width: 50px;
  height: 0px;
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
}

li {
  color: white !important;
}

router-view {
  background-color: darkgray ;  
}
</style>
