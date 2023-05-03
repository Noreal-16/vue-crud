<template>
    <div>
        <AppBarAuth />
        <v-container fluid style="margin-top: 15vh;">
            <v-row justify="center">
                <v-col cols="12" sm="8" md="6">
                    <v-card>
                        <v-card-title>
                            <h2>Inicio Sesión</h2>
                        </v-card-title>
                        <v-card-text>
                            <FormAuth />
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
  
<script>
import FormAuth from './FormAuth.vue';
import AppBarAuth from '@/components/auth/AppBarAuth'
export default {
    components: {
        FormAuth,
        AppBarAuth
    },
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>