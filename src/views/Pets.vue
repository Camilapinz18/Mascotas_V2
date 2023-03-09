<script setup>
import Button from '../components/Auxiliar/Button.vue';
import Navbar from '../components/Auxiliar/Navbar.vue';
import Footer from '../components/Footer.vue';
import { ref } from "vue";
import axios from 'axios';
/************ */
const showModalSearch = ref(false);
const showModalRegister = ref(false);
const name = ref('')
const idCard = ref('')
const address = ref('')
const phone = ref('')
const email = ref('')
const userExists = ref(false)
const currentUser = ref('')
const isReadonly = ref(true)
const isSearchUser = ref(true)
const isUserInfo = ref(false)

const searchUser = async () => {

    console.log("update", isReadonly.value)
    if (idCard.value === '' || idCard.value === null || idCard.value === undefined) {
        alert('Ingresa tu número de documento para continuar')
    } else {

        try {
            const response = await axios.get(`https://drab-lime-hen-suit.cyclic.app/api/v1/user/${idCard.value}`)
            console.log(response.status)

            if (response.data) {
                isSearchUser.value = false

                isUserInfo.value = true

                userExists.value = true


                currentUser.value = response.data
                console.log(currentUser.value)
            } else {
                alert('No estas registrado')
            }
        } catch (error) {
            console.log("ERRROOO2",)

            if (error.response.status === 404) {
                alert('El usuario no existe')
                showModalSearch.value = false
                showModalRegister.value = true
            }
            //  alert('No estas registrado')
        }


    }
}


const registerUser = async () => {

    showModalRegister.value = true;

    if (name.value === '' || name.value === null || name.value === undefined ||
        idCard.value === '' || idCard.value === null || idCard.value === undefined ||
        address.value === '' || address.value === null || address.value === undefined ||
        phone.value === '' || phone.value === null || phone.value === undefined ||
        email.value === '' || email.value === null || email.value === undefined
    ) {
        alert('Completa todos los datos para continuar')
    } else {

        try {
            const response = await axios.post('https://drab-lime-hen-suit.cyclic.app/api/v1/user/register', {
                name: name.value,
                idCard: idCard.value,
                address: address.value,
                phone: phone.value,
                email: email.value
            })

            console.log(response);

            alert('Usuario registrado xitosamente')
            showModalSearch.value = false;
            showModalRegister.value = false;
        } catch (error) {
            console.error(error);
        }
    }
}


const updateUser = async () => {
    const updatedUser = {
        name: currentUser.value.name,
        address: currentUser.value.address,
        phone: currentUser.value.phone,
        email: currentUser.value.email
    }

    console.log("update", updatedUser)



    try {
        const response = await axios.put(`https://drab-lime-hen-suit.cyclic.app/api/v1/user/update/${currentUser.value._id}`, updatedUser)
        console.log(response.data)
        alert('Usuario modificado exitosamente')
        showModalSearch.value = false

        //Aqui continua al proceso de adopcion

    } catch (error) {
        console.log(error)
    }
}

</script>

<template>
    <Navbar />
    <div class="main-pets-cont">
        <div class="pets-welcome-cont">
            <img src="../assets/images/pets-welcome.jpg" />
            <div class="pets-text">
                <h1>Adopta un amigo</h1>
                <p>En PetMatch, estamos orgullosos de contar con una amplia variedad de razas de mascotas, cada una de ellas
                    con
                    una
                    personalidad y encanto únicos, y todas con un gran deseo de ser amadas y cuidadas por una familia
                    amorosa.
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
    </div>



    <n-modal v-model:show="showModalSearch" :mask-closable="false" preset="dialog" title="Dialog" positive-text="Confirm"
        negative-text="Cancel" @positive-click="onPositiveClick" @negative-click="onNegativeClick">
        <template #header>
            <div>Busqueda de usuario</div>
        </template>
        <div class="modal-cont">
            <h3>Documento:</h3>
            <n-input v-if="isSearchUser" v-model:value="idCard" round placeholder="Número de documento" />
            <n-input v-else-if="isSearchUser === false" v-model:value="idCard" round placeholder="Número de documento"
                disabled />
        </div>
        <div class="user-exists-cont" v-if="userExists">
            <div>
                <h3>Nombre:</h3>
                <n-input v-if="isReadonly" v-model:value="currentUser.name" round placeholder="Nombre completo" disabled />
                <n-input v-else-if="isReadonly === false" v-model:value="currentUser.name" round
                    placeholder="Nombre completo" />
            </div>
            <div>
                <h3>Telefono:</h3>
                <n-input v-if="isReadonly" v-model:value="currentUser.phone" round placeholder="Número de teléfono"
                    disabled />
                <n-input v-else-if="isReadonly === false" v-model:value="currentUser.phone" round
                    placeholder="Número de teléfono" />


            </div>
            <div>
                <h3>Email:</h3>
                <n-input v-if="isReadonly" v-model:value="currentUser.email" round placeholder="Email" disabled />
                <n-input v-else-if="isReadonly === false" v-model:value="currentUser.email" round placeholder="Email" />
            </div>
            <div>
                <h3>Dirección:</h3>
                <n-input v-if="isReadonly" v-model:value="currentUser.address" round placeholder="Dirección" disabled />
                <n-input v-else-if="isReadonly === false" v-model:value="currentUser.address" round
                    placeholder="Dirección" />
            </div>
        </div>
        <template #action>
            <Button v-if="userExists" @click="isReadonly = !isReadonly" :text="isReadonly ? 'Editar' : 'Guardar'" />
            <Button v-if="isUserInfo" @click="updateUser" text="Continuar" />



            <Button v-if="isSearchUser" @click="searchUser" text="Buscar" />
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
    <Footer/>
</template>

<style scoped>
.main-pets-cont {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.main-pets-cont h1 {
    margin-top: 30px;
    font-size: 40px;
}

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
    grid-template-columns: minmax(200px, 1fr) minmax(200px, 1fr) minmax(200px, 1fr);
    grid-template-rows: auto auto auto;
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

.user-exists-cont {

    display: flex;
    flex-direction: column;
}
</style>
