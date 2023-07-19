<template>
    <v-container>
        <v-card class="">
            <v-card-title class="justify-center">
                <h3>Registro</h3>
            </v-card-title>
            <v-card-text>
                <v-form ref="form" lazy-validation>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field
                                label="Nombre de usuario"
                                outlined
                                dense
                                v-model="registerUser.name"
                                :rules="rules.name"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                label="Correo"
                                outlined
                                dense
                                v-model="registerUser.email"
                                :rules="rules.email"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                label="Contraseña"
                                type="password"
                                outlined
                                dense
                                v-model="registerUser.password"
                                :rules="rules.password"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" class="text-center">
                            <v-btn
                                color="cyan darken-4"
                                dark
                                @click="submit"
                            >Registrar</v-btn>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: "FormRegister",
    data(){
        return {
            registerUser: {
                name: '',
                email: '',
                password: '',
            },
            rules: {
                name: [v => !!v || 'Ingrese el nombre'],
                email: [
                    v => !!v || 'Ingrese el correo electrónico',
                    v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Ingrese el correo válido'
                ],
                password: [v => !!v || 'Ingrese la contraseña']
            }
        }
    },
    methods: {
        submit(){
            const valid = this.$refs.form.validate();
            if (valid){
                localStorage.setItem('authUser', JSON.stringify(this.registerUser));
                this.$router.push({name:'login'});
                //this.$router.replace({name:'login'});
            }
        }
    }
}
</script>

<style scoped>

</style>
