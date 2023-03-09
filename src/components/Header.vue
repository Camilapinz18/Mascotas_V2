<script setup>
import Navbar from './Auxiliar/Navbar.vue';
import Button from './Auxiliar/Button.vue';
</script>

<template>
    <div class="header-cont">
        <Navbar />
        <div class="welcome-cont">
            <div class="text-cont">
                <h1>¡Bienvenido a PetMatch, donde tu futuro amigo peludo te espera!</h1>
                <p>Adoptar una mascota no solo cambia su vida, sino también la tuya...!</p>
                <div class="buttons-cont">
                    <Button text="Iniciar adopción"/>
                    <Button text="Conoce más"/>
                </div>
               
            </div>

            <img src="../assets/images/welcome.png" />

        </div>


    </div>
</template>

<style scoped>
.header-cont {
    height: 100vh;
}

.welcome-cont {

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 85vh;
}

.welcome-cont h1 {
    font-size: 50px;
    width: 40%;
}

.welcome-cont img {
    width: 50%;
}

.text-cont {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

.text-cont h1, .text-cont p {
    width: 80%;
    margin: 20px;
}

.buttons-cont{
    display: flex;
    flex-direction: row;
    width: 80%;

    align-items: flex-start;

}
</style>
