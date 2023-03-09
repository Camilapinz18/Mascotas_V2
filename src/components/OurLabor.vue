<script setup>

</script>

<template>
    <h1>Nuestra labor</h1>
    <div class="labor-cont">

        <div class="images-cont">
            <div class="labor-info">
                <img src="../assets/images/labor2.jpg" />
                <h3>Rescate</h3>
                <span>Salvamos vidas animales y les damos una segunda oportunidad para ser felices</span>
            </div>

            <div class="labor-info">
                <img src="../assets/images/labor1.jpg" />
                <h3>Cuidado</h3>
                <span>Cuidamos de los animales rescatados, brindándoles atención y amor hasta encontrarles un hogar seguro y
                    amoroso</span>
            </div>
            <div class="labor-info">
                <img src="../assets/images/labor4.jpg" />
                <h3>Albergue</h3>
                <span>Proporcionamos un refugio temporal y seguro para los animales rescatados, mientras les buscamos un
                    hogar amoroso definitivo</span>
            </div>
            <div class="labor-info">
                <img src="../assets/images/labor3.jpg" />
                <h3>Adopción</h3>
                <span>Encontramos hogares amorosos para los animales rescatados, asegurándonos de que tengan una segunda
                    oportunidad de ser felices y queridos</span>
            </div>
        </div>

    </div>
</template>

<style scoped>
.labor-cont {

    display: flex;
    flex-direction: row;

    justify-content: center;
    align-items: center;
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
}

.labor-info h3,
.labor-info span {
    align-self: center;

}
</style>
