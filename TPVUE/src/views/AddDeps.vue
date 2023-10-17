<template>
    <div class="container">
        <form action="" @submit.prevent="add" class="form mt-5">
            <h3 class="mb-4">Ajout de département</h3>
            <p>{{ error }}</p>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Entrez L'ID</label>
                <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    v-model="newDep.id">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Entrez le nom du département</label>
                <input type="text" class="form-control" id="exampleInputPassword1" v-model="newDep.nameDep">
            </div>
            <button class="btn btn-primary">Submit</button>
        </form>

        <div class="modal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Erreur</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>{{ error }}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <a href="/">Retour</a>
</template>

<script setup lang="ts">
import router from '@/router';
import { clientHttp } from '../libs/clientHttp.js'
import { ref } from 'vue';
const error = ref({})
/* import error from 'vue' */
/* const dep = ref([]) */
const newDep = ref({
    id: '',
    nameDep: ''
})


async function add() {
    if (newDep.value.id && newDep.value.nameDep) {
        const dep = await clientHttp.post('/dep', newDep.value)
        console.log(dep)
        router.replace('/')
    } else {
        error.value = 'Veuillez remplir tous les champs'

        console.error('Oups')
    }
}
add()
/* async function add(){
   const addDep = await clientHttp.post('/departement',{
        nameDep: dep.value.nameDep
    })
    console.log(addDep)
}
 add() */
</script>

<style>
/* #exampleInputEmail1{
    width: 30%;
}
#exampleInputPassword1{
    width: 60%;
} */
.form {
    width: 30%;
    padding: 20px;
    margin: auto;
    border: 1px solid black;
    border-radius: 5px;
    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
</style>