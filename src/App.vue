<template>
  <b-container>
    <div id="app">
      <navheader></navheader>
      <div class='container'>
        <transition>
          <router-view />
        </transition>
      </div>
      <navfooter></navfooter>
    </div>
  </b-container>
</template>

<script>
import navheader from '@/components/NavHeader.vue'
import navfooter from '@/components/NavFooter.vue'

export default {
  name: 'App',
  components: {
    navheader,
    navfooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding : 0px 0px;
}
.container{
  margin : 0px 0px;
  padding : 0px 0px;
}
.v-enter-active {
  transition: opacity 1.5s;
}
.v-enter, .v-leave-to {
  opacity: 0;
}
</style>
