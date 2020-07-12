<template>
<b-container class="container">
    <h1>Works</h1>
    <b-card
    v-for='work in works'
    :work="work"
    :key="work['id']"
    :title="work['title']"
    :img-src="work['img']"
    title-tag="h5"
    img-alt="Image"
    img-left
    img-height="100%"
    img-width="100%"
    tag="article"
    style="max-width: 40%;"
    class="mb-2"
    >
        <b-card-text style="max-width: 100%;">
        {{ work['text'] }}
        <b-link :href="work['github']" class="card-link">
            {{work['github']}}
        </b-link>
        </b-card-text>
    </b-card>
</b-container>
</template>
<script>
import works from '../../static/data.json'

export default {
    data(){
        return{
            works : works
        }
    }
}
</script>
<style scoped>
.container{
    padding : 20px 0px;
    text-align: left;
}
.card-body{
    padding : 0px 10px;
    max-width: 150%;
}
</style>