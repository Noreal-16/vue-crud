<template>
    <v-table fixed-header height="300px" style="margin-bottom: 10vh;">
        <thead>
            <tr>
                <th class="text-left">
                    Id
                </th>
                <th class="text-left">
                    Title
                </th>
                <th class="text-left">
                    Body
                </th>
                <th class="text-left">
                    UserId
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
                    <ModalUpdateComponent :idPosts="item.id" />
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
export default {
    components: {
        ModalUpdateComponent
    },
    data() {
        return {
            desserts: [],
        }
    },
    created: function () {
        this.getDataPosts();
    },
    methods: {
        getDataPosts() {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then((dataResponse) => {
                    this.desserts = dataResponse
                }).catch(console.log)
        },
        deleteById(id) {
            this.$swal({
                title: `Seguro que desea eliminar el posts ${id}?`,
                showDenyButton: true,
                confirmButtonText: 'Eliminar',
                denyButtonText: `Cancelar`,
            }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,
                        { method: 'DELETE' }).then((data) => {
                            if (data.status === 200) {
                                this.$swal.fire(`Registro con Id ${id} eliminado satisfactoriamente`, '', 'success')
                            }
                        })
                } else if (result.isDenied) {
                    this.$swal('No se guardaron los cambios', '', 'info')
                }
            })

        }
    }
}
</script>