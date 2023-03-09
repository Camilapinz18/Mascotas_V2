<script setup>

</script>

<template>
   
    <div class="labor-cont">
        <h1>Nuestra labor</h1>

        <div class="images-cont">
            <div class="labor-info">
                <img src="../assets/images/labor2.jpg" />
                <h3>Rescate</h3>
                <span>Salvamos vidas animales y les damos una segunda oportunidad para ser felices</span>
            </div>

            <div class="labor-info">
                <img src="../assets/images/labor1.jpg" />
                <h3>Cuidado</h3>
                <span>Brindamos cuidado, alimentacion y servicios veterinarios a todas nuestras mascotas</span>
            </div>
            <div class="labor-info">
                <img src="../assets/images/labor4.jpg" />
                <h3>Albergue</h3>
                <span>Proporcionamos un refugio temporal y seguro para los animales rescatados</span>
            </div>
            <div class="labor-info">
                <img src="../assets/images/labor3.jpg" />
                <h3>Adopción</h3>
                <span>Encontramos hogares amorosos para los animales rescatados</span>
            </div>
        </div>

    </div>
</template>

<style scoped>
.labor-cont {

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    background-image: url('../assets/images/bg-our.svg');
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 40px;

   
}

.images-cont {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

}

.images-cont img {
    width: 15rem;
    border-radius: 50%;
    margin: 15px;
    height: 100%;
 
}

.labor-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;

    margin: 20px;
}

.labor-info h3,
.labor-info span {
    align-self: center;

}
</style>
