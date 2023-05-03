<template>
    <v-table fixed-header height="300px" style="margin-bottom: 10vh; margin-top: 10vh; margin-right: 10vh;">
        <thead>
            <tr>
                <th class="text-left">
                    Nro.
                </th>
                <th class="text-left">
                    Título
                </th>
                <th class="text-left">
                    Cuerpo
                </th>
                <th class="text-left">
                    Id Usuario
                </th>
                <th class="text-left">
                    Acciones
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in desserts" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.title }}</td>
                <td>{{ item.body }}</td>
                <td>{{ item.userId }}</td>
                <td style="display: flex; justify-content: center; align-items: center;">
                    <ModalUpdateComponent :idPosts="item.id" :dataUpdate="desserts" />
                    <v-btn class="text-none text-subtitle-1 d-flex justify-content-center" color="red-darken-4" size="small"
                        variant="outlined" prepend-icon="mdi-delete-forever" @click="deleteById(item.id)">
                    </v-btn>
                </td>
            </tr>
        </tbody>
    </v-table>
</template>
<script>
import ModalUpdateComponent from './ModalUpdateComponent.vue';
import dataPost from '../utils/data';

import mitt from 'mitt'
const emitter = mitt();
export default {
    components: {
        ModalUpdateComponent
    },
    data() {
        return {
            desserts: []
        }
    }, mounted() {
        this.desserts = dataPost,
        emitter.on('post-updated', () => {
            this.desserts = dataPost;
        });
    },
    methods: {
        deleteById(id) {
            this.$swal({
                title: `Seguro que desea eliminar el posts ${id}?`,
                showDenyButton: true,
                confirmButtonText: 'Eliminar',
                denyButtonText: `Cancelar`,
            }).then((result) => {
                if (result.isConfirmed) {
                    let indiceArray = this.desserts.findIndex((item) => item.id === id);
                    if (indiceArray !== -1) {
                        this.desserts.splice(indiceArray, 1);
                    }
                    this.$swal({
                        position: 'top-end',
                        icon: 'success',
                        title: `Se elimino el registro ${id}`,
                        showConfirmButton: false,
                        timer: 1000
                    })
                } else if (result.isDenied) {
                    this.$swal('No se guardaron los cambios', '', 'info')
                }
            })

        }
    },
}
</script>