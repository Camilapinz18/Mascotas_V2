<script setup>
import Header from '../components/Header.vue';
import Body from '../components/Body.vue';
import Footer from '../components/Footer.vue';

</script>

<template>
    <div class="main-cont">
        <Header />
    </div>
    <Body />
    <Footer />
</template>

<style scoped>
.main-cont {
    background-image: url('../assets/images/bg2.svg');
    background-repeat: no-repeat;
    background-size: cover;
}
</style>