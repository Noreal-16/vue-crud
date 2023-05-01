<template>
    <v-table fixed-header height="300px">
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
                    <v-btn class="text-none text-subtitle-1 d-flex justify-content-center" color="teal-darken-1"
                        size="small" variant="outlined" prepend-icon="mdi-pencil">
                    </v-btn>
                    <v-btn class="text-none text-subtitle-1 d-flex justify-content-center" color="red-darken-4" size="small"
                        variant="outlined" prepend-icon="mdi-delete-forever" @click="deleteById(item.id)">
                    </v-btn>
                </td>
            </tr>
        </tbody>
    </v-table>
</template>
<script>
export default {
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
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,
                { method: 'DELETE' }).then((data)=>{
                    if (data.status === 200) {
                        console.log(`Registro con Id ${id} eliminado satisfactoriamente`)
                    }
                })
        }
    }
}
</script>