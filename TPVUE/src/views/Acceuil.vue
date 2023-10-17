<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue';
import { useAxios } from '../composable/useAxios.js'
import { clientHttp } from '../libs/clientHttp.js'
const depsData = ref([])
async function getDepartement() {
    const data = await clientHttp.get('/')
    console.log(data.data)
    depsData.value = data.data
}
getDepartement()

/* async function setDepartement(){
    const request = await clientHttp.post('/dep',{id: 7, nameDep:"Couffo"})
    console.log(request)
}

await setDepartement() */
</script>

<template>
    <div class="container mt-5">
        <div class="header mt-5 d-flex justify-content-around">
            <h1 class="">
                Liste des départements
            </h1>
            <a href="/add">
                <button type="submit" class="btn btn-primary">Ajouter un departement</button>
            </a>
        </div>
        <div class="content mt-5">
            <table class="table table-dark table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nom du département</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="element in depsData">
                       <td>{{ element.id }}</td>
                       <td>{{ element.nameDep }}</td>
                       <td>
                       <button class="btn btn-danger">Supprimer</button>
                       </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
