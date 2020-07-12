<template>
    <div class="container">
        <h1>Home</h1>
        <b-carousel id="carousel-1"
        :interval="4000"
        :caption="name"
        fade
        controls
        indicators
        img-width="1024"
        img-height="480"
        background="#ababab"
        style="text-shadow: 1px 1px 2px #333;">
        <b-carousel-slide img-src="@/assets/IMG_1926.jpeg" :caption="name"></b-carousel-slide>
        <b-carousel-slide img-src="@/assets/IMG_1927.jpeg" :caption="name"></b-carousel-slide>
        <b-carousel-slide img-src="@/assets/IMG_1932.jpeg" :caption="name"></b-carousel-slide>
        </b-carousel>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        name: "Masaki Tashiro"
      }
    }
  }
</script>
<style scoped>
.container{
  text-align: left;
}
</style>