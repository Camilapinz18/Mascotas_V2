<script setup>
import Button from '../components/Auxiliar/Button.vue';
import Navbar from '../components/Auxiliar/Navbar.vue';
import Footer from '../components/Footer.vue';
import { ref, reactive, onMounted, onBeforeMount } from "vue";
import axios from 'axios'

/***************************** */
const breed = ref('');
const showModalAdd = ref(false);
const showModalUpdate = ref(false);
const currentBreed = ref('')
let breeds = reactive([]);

onBeforeMount(() => {
    console.log("Mounted")
    fetchBreeds()
})

const fetchBreeds = async () => {
    breeds.splice(0, breeds.length);
    try {
        const response = await axios.get('https://drab-lime-hen-suit.cyclic.app/api/v1/breed/all');
        console.log(response.data);
        response.data.map(breed => breeds.push(breed))
        console.log("Array", breeds)
        //breeds=response.data
    } catch (error) {
        console.error(error);
    }
}

function onPositiveClick() {
    alert('submit')
    showModalAdd.value = false;
}

function onNegativeClick() {
    alert('cancel')
    showModalAdd.value = false;
}

const addNewBreed = async () => {
    if (breed.value === '' || breed.value === null || breed.value === undefined) {
        alert('Ingresa la raza para continuar')
    } else {

        const newBreed = breed.value
        try {
            console.log(breed.value, "valorrrr")
            const response = await axios.post('https://drab-lime-hen-suit.cyclic.app/api/v1/breed/create', { name: newBreed });
            console.log(response.data);
            alert("Raza " + breed.value + " añadida")
            breed.value = ''
            showModalAdd.value = false;
            fetchBreeds()

        } catch (error) {
            console.error(error);
        }

    }
}

const updateBreed = (breed) => {
    console.log("breed", breed._id)
    showModalUpdate.value = true
    currentBreed.value = breed
}

const saveUpdatedBreed = async () => {
    console.log("save", currentBreed.value)
    const saveChanges = confirm('Esta seguro de guardar los cambios?')
    if (saveChanges) {
        showModalUpdate.value = false
        try {
            const response = await axios.put(`https://drab-lime-hen-suit.cyclic.app/api/v1/breed/update/${currentBreed.value._id}`, { name: currentBreed.value.name })
            console.log(response);
            alert('Cambios guardados')
        } catch (error) {
            console.error(error);
        }

    } else {

    }
}

const deleteBreed = async (breed) => {
    console.log("delete", breed._id)
    const deleteBreed = confirm('Esta seguro de eliminar la raza ' + breed.name + '?')
    if (deleteBreed) {

        try {
            const response = await axios.delete(`https://drab-lime-hen-suit.cyclic.app/api/v1/breed/delete/${breed._id}`)
            console.log(response);
            fetchBreeds()
            alert('Raza ' + breed.name + ' eliminada')
        } catch (error) {
            console.error(error);
        }


    } else {

    }
}


</script>

<template>
    <Navbar />

    <div class="pets-welcome-cont">

        <div class="pets-text">
            <h1>Encuentra a tu amigo</h1>
            <p>En PetMatch, estamos orgullosos de contar con una amplia variedad de razas de mascotas, cada una de ellas con
                una
                personalidad y encanto únicos, y todas con un gran deseo de ser amadas y cuidadas por una familia amorosa.
            </p>
        </div>
        <img src="../assets/images/breeds-welcome.jpg" />

    </div>
    <div class="main-table-cont">
        <table class="table-cont">
            <tr>
                <th>Raza</th>
                <th>Opciones</th>

            </tr>
            <tr class="breed-info" v-for="breed in breeds">

                <td class="breed-text">{{ breed.name }}</td>
                <td class="breed-option">
                    <n-button @click="updateBreed(breed)" type="warning">
                        Editar
                    </n-button>
                </td>
                <td class="breed-option">
                    <n-button @click="deleteBreed(breed)" type="error">
                        Eliminar
                    </n-button>
                </td>
            </tr>

        </table>
        <Button @click="showModalAdd = true" text="Añadir" />

    </div>





    <n-modal v-model:show="showModalAdd" :mask-closable="false" preset="dialog" title="Dialog" positive-text="Confirm"
        negative-text="Cancel" @positive-click="onPositiveClick" @negative-click="onNegativeClick">
        <template #header>
            <div>Añadir nueva raza</div>
        </template>
        <div class="modal-cont">
            <span>Raza:</span>
            <n-input v-model:value="breed" round placeholder="Nombre de raza" />
        </div>
        <template #action>
            <Button @click="addNewBreed" text="Añadir" />
        </template>

    </n-modal>

    <n-modal v-model:show="showModalUpdate" :mask-closable="false" preset="dialog" title="Dialog" positive-text="Confirm"
        negative-text="Cancel" @positive-click="onPositiveClick" @negative-click="onNegativeClick">
        <template #header>
            <div>Editar raza</div>
        </template>
        <div class="modal-cont">
            <span>Raza:</span>
            <n-input v-model:value="currentBreed.name" round placeholder="Nombre de raza" />
        </div>
        <template #action>
            <Button @click="saveUpdatedBreed" text="Guardar" />
        </template>

    </n-modal>
    <Footer />
</template>

<style scoped>
.pets-welcome-cont {
    display: flex;
    flex-direction: row;
    height: 80vh;

    justify-content: space-evenly;
    align-items: center;
    padding-top: 30px;
    background-image: url('../assets/images/bg-breeds.svg');
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

.modal-cont {
    margin-top: 20px;
}

.modal-cont span {
    font-size: 20px;
    font-weight: bold;
}

.breeds-table {

    width: 100%;
    align-self: center;
    justify-content: center;
    align-items: center;
}

.breed-info {}

.breed-text {

    width: 60%;
    align-self: center;
    text-align: center;
}

.breed-btns {
    background-color: green;
    width: 50pz;
}

.breed-option {
    width: 10%
}

.table-cont {

    width: 50%;
    margin: 0 auto;
    font-size: 20px;
    padding-bottom: 30px;

}

.main-table-cont {
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
}
</style>