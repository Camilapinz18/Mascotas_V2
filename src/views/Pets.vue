<script setup>
import Button from '../components/Auxiliar/Button.vue';
import Navbar from '../components/Auxiliar/Navbar.vue';
import { ref } from "vue";
/************ */
const showModalSearch = ref(false);
const showModalRegister = ref(false);
const name = ref('')
const idCard = ref('')
const address = ref('')
const phone = ref('')
const email = ref('')

const searchUser = () => {
    if (idCard.value === '' || idCard.value === null || idCard.value === undefined) {
        alert('Ingresa tu número de documento para continuar')
    } else {
        let randBool = false
        //let randBool = Math.round(Math.random() * 2)

        if (randBool) {
            alert("Ya eres usuario regitrado")
            idCard.value = ''
            showModalSearch.value = false;

            //Se continua a la adopcion
        } else {
            alert("No eres usuario regitrado. Continua con tu registro")
            idCard.value = ''
            showModalSearch.value = false;

            //Se continua al registro
            registerUser()
        }


    }
}


const registerUser = () => {

    showModalRegister.value = true;

    if (name.value === '' || name.value === null || name.value === undefined ||
        idCard.value === '' || idCard.value === null || idCard.value === undefined ||
        address.value === '' || address.value === null || address.value === undefined ||
        phone.value === '' || phone.value === null || phone.value === undefined ||
        email.value === '' || email.value === null || email.value === undefined
    ) {
        alert('Completa todos los datos para continuar')
    } else {
        alert('Usuario registrado xitosamente')
        showModalSearch.value = false;
        showModalRegister.value = false;


    }



}

</script>

<template>
    <Navbar />
    <div class="pets-welcome-cont">
        <img src="../assets/images/pets-welcome.jpg" />
        <div class="pets-text">
            <h1>Adopta un amigo</h1>
            <p>En PetMatch, estamos orgullosos de contar con una amplia variedad de razas de mascotas, cada una de ellas con
                una
                personalidad y encanto únicos, y todas con un gran deseo de ser amadas y cuidadas por una familia amorosa.
            </p>
        </div>

    </div>
    <h1>Conoce a nuestros peludos</h1>
    <div class="cards-cont">
        <n-card title="Nombre">
            <template #cover>
                <img src="../assets/images/grid1.jpg">
            </template>
            <div class="pet-info">
                <div class="pet-info-item">
                    <h3>Info:</h3>
                    <span>Dato</span>
                </div>
                <div class="pet-info-item">
                    <h3>Info:</h3>
                    <span>Dato</span>
                </div>
                <div class="pet-info-item">
                    <h3>Info:</h3>
                    <span>Dato</span>
                </div>
                <Button @click="showModalSearch = true" text="Adoptar!" />
            </div>
        </n-card>

        <n-card title="Nombre">
            <template #cover>
                <img src="../assets/images/grid1.jpg">
            </template>
            <div class="pet-info">
                <div class="pet-info-item">
                    <h3>Info:</h3>
                    <span>Dato</span>
                </div>
                <div class="pet-info-item">
                    <h3>Info:</h3>
                    <span>Dato</span>
                </div>
                <div class="pet-info-item">
                    <h3>Info:</h3>
                    <span>Dato</span>
                </div>
                <Button @click="searchUser" text="Adoptar!" />
            </div>
        </n-card>

        <n-card title="Nombre">
            <template #cover>
                <img src="../assets/images/grid1.jpg">
            </template>
            <div class="pet-info">
                <div class="pet-info-item">
                    <h3>Info:</h3>
                    <span>Dato</span>
                </div>
                <div class="pet-info-item">
                    <h3>Info:</h3>
                    <span>Dato</span>
                </div>
                <div class="pet-info-item">
                    <h3>Info:</h3>
                    <span>Dato</span>
                </div>
                <Button @click="searchUser" text="Adoptar!" />
            </div>
        </n-card>

        <n-card title="Nombre">
            <template #cover>
                <img src="../assets/images/grid1.jpg">
            </template>
            <div class="pet-info">
                <div class="pet-info-item">
                    <h3>Info:</h3>
                    <span>Dato</span>
                </div>
                <div class="pet-info-item">
                    <h3>Info:</h3>
                    <span>Dato</span>
                </div>
                <div class="pet-info-item">
                    <h3>Info:</h3>
                    <span>Dato</span>
                </div>
                <Button @click="searchUser" text="Adoptar!" />
            </div>
        </n-card>

        <n-card title="Nombre">
            <template #cover>
                <img src="../assets/images/grid1.jpg">
            </template>
            <div class="pet-info">
                <div class="pet-info-item">
                    <h3>Info:</h3>
                    <span>Dato</span>
                </div>
                <div class="pet-info-item">
                    <h3>Info:</h3>
                    <span>Dato</span>
                </div>
                <div class="pet-info-item">
                    <h3>Info:</h3>
                    <span>Dato</span>
                </div>
                <Button @click="searchUser" text="Adoptar!" />
            </div>
        </n-card>
    </div>


    <n-modal v-model:show="showModalSearch" :mask-closable="false" preset="dialog" title="Dialog" positive-text="Confirm"
        negative-text="Cancel" @positive-click="onPositiveClick" @negative-click="onNegativeClick">
        <template #header>
            <div>Registro de usuario</div>
        </template>
        <div class="modal-cont">
            <span>Documento</span>
            <n-input v-model:value="idCard" round placeholder="Número de documento" />
        </div>
        <template #action>
            <Button @click="showModalRegister=true" text="Continuar" />
        </template>
    </n-modal>

    <n-modal v-model:show="showModalRegister" :mask-closable="false" preset="dialog" title="Dialog" positive-text="Confirm"
        negative-text="Cancel" @positive-click="onPositiveClick" @negative-click="onNegativeClick">
        <template #header>
            <div>Registro de usuario</div>
        </template>
        <div class="modal-cont">
            <span>Nombre completo</span>
            <n-input v-model:value="name" round placeholder="Nombre completo" />
            <span>Documento</span>
            <n-input v-model:value="idCard" round placeholder="Número de documento" />
            <span>Dirección</span>
            <n-input v-model:value="address" round placeholder="Dirección de residencia" />
            <span>Teléfono</span>
            <n-input v-model:value="phone" round placeholder="Número de teléfono" />
            <span>Email</span>
            <n-input v-model:value="email" round placeholder="Email" />
        </div>
        <template #action>
            <Button @click="registerUser" text="Continuar" />
        </template>
    </n-modal>
</template>

<style scoped>
.pets-welcome-cont {
    display: flex;
    flex-direction: row;
    height: 80vh;

    justify-content: space-evenly;
    align-items: center;
    padding-top: 30px;
    background-image: url('../assets/images/bg-pets.svg');
    background-repeat: no-repeat;
    background-size: cover;
}

.pets-welcome-cont img {
    width: 40%;
    border-radius: 50%;
}

.pets-text {

    width: 40%;
}

.pets-text p {
    font-size: 17px;
}

.pets-text h1 {
    font-size: 40px;
    margin-bottom: 20px;
}

.cards-cont {
    display: grid;
    grid-template-columns: auto auto auto auto;
}



.n-card {
    max-width: 300px;
}

.pet-info {}

.pet-info-item {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 5px;
}

.pet-info-item h3 {
    margin-right: 5px;
}
</style>
