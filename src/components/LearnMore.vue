<script setup>


</script>

<template>
    <div class="learn-cont">
        <div class="images-cont">
            <div class="images-grid">
                <img src="../assets/images/grid1.jpg" />
                <img src="../assets/images/grid2.jpg" />
                <img src="../assets/images/grid3.jpg" />
                <img src="../assets/images/grid4.jpg" />
                <img src="../assets/images/grid5.jpg" />
                <img src="../assets/images/grid6.jpg" />
            </div>

        </div>
        <div class="text-cont">
            <h2>Un hogar para ellos, una familia para ti. Adopta y cambia dos vidas para siempre.</h2>
            <p>En nuestra fundación, nos dedicamos a ayudar a los animales necesitados. Nuestra misión es rescatar perros,
                gatos
                y otros animales que han sido abandonados o maltratados, y proporcionarles un hogar amoroso.</p>
            <br />
            <p class="p-mb">Además, trabajamos para educar al público sobre la importancia de la adopción y la
                responsabilidad de tener una
                mascota. Sabemos que adoptar un animal no es una decisión fácil, por lo que nuestro equipo de profesionales
                está
                siempre dispuesto a ayudar a encontrar el compañero perfecto para ti.</p>

            <Button text="Adoptar!" />

            <div class="numbers-cont">
                <div class="numbers-info">
                    <h3>300+</h3>
                    <h4>Mascotas recogidas</h4>
                </div>

                <div class="numbers-info">
                    <h3>250+</h3>
                    <h4>Mascotas adoptadas</h4>
                </div>

                <div class="numbers-info">
                    <h3>5+</h3>
                    <h4>Años de labor</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.learn-cont {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
}

.images-grid {
    display: grid;
    grid-template-columns: auto auto auto;

}

.p-mb {
    margin-bottom: 20px;
}

.images-grid img {
    width: 11rem;
    margin: 10px;
    border-radius: 10px;
}

.text-cont {
    width: 40%;
    margin: 30px;
}

.text-cont h2 {
    font-size: 30px;
    margin-bottom: 30px;
}

.text-cont p {
    font-size: 15px;
    text-align: justify;
    text-justify: inter-word;

}

.numbers-cont {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.numbers-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

.numbers-info h3 {
    font-size: 40px;

}
</style>
