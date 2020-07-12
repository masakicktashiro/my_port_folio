<template>
    <b-container>
        <b-nav tabs align="center">
            <b-nav-item exact exact-active-class="active" to="/">Home</b-nav-item>
            <b-nav-item exact exact-active-class="active" to="/history">History</b-nav-item>
            <b-nav-item exact exact-active-class="active" to="/works">Works</b-nav-item>
        </b-nav>
    </b-container>
</template>
<style scoped>
.footer{
    color : black;
}
nav a.router-link-active {
    font-weight: 700; 
}
</style>