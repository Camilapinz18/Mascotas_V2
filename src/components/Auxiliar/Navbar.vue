<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="navbar-cont">
        <img class="logo-img" src="../../assets/images/logo.png" alt="logo" />
        <div class="links-cont">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/pets">Adoptar</RouterLink>
            <RouterLink to="/breeds">Razas</RouterLink>
            <RouterLink to="/history">Historial</RouterLink>
        </div>

    </div>
</template>

<style scoped>
.navbar-cont {
    display: flex;
    flex-direction: row;
    padding: 10px;
    justify-content: space-between;
}

.logo-img {
    width: 10%
}

.links-cont {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.links-cont a {
    margin-left: 20px;
    margin-right: 50px;
    font-size: 18px;
}

.links-cont a:hover {
    font-weight: bolder;
    cursor: pointer;
    color: #A35832
}
</style>
