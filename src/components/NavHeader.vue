<template>
    <b-container>
        <b-navbar variant="info" fixed="top" type="dark">
            <b-navbar-nav tabs>
                <b-nav-item exact exact-active-class="active" to="/">Home</b-nav-item>
                <b-nav-item exact exact-active-class="active" to="/history">History</b-nav-item>
                <b-nav-item exact exact-active-class="active" to="/works">Works</b-nav-item>
            </b-navbar-nav>
        </b-navbar>
    </b-container>
</template>
<style scoped>
nav a.router-link-active {
    font-weight: 700; 
}
</style>