<template>
    <v-container>
        <v-card class="">
            <v-card-title class="justify-center">
                <h3>Acceso</h3>
            </v-card-title>
            <v-card-text>
                <v-form ref="form" lazy-validation>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field
                                label="Correo"
                                outlined
                                dense
                                v-model="email"
                                :rules="rules.email"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                label="Contraseña"
                                type="password"
                                outlined
                                dense
                                v-model="password"
                                :rules="rules.password"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" class="text-center">
                            <v-btn
                                color="cyan darken-4"
                                dark
                                @click="submit"
                            >Ingresar</v-btn>
                        </v-col>
                        <v-col cols="12" class="text-center">
                            <v-btn
                                color="cyan darken-4"
                                dark
                                @click="goRegister"
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
    name: "FormLogin",
    data(){
        return {
            email: '',
            password: '',
            rules: {
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
            const authUser = JSON.parse(localStorage.getItem('authUser'));
            console.log(authUser);
            if (valid){
                console.log('validado');
                console.log(authUser.email === this.email && authUser.password === this.password)
                if (authUser.email === this.email && authUser.password === this.password){
                    this.alert('success','Bienvenido','Acceso autorizado');
                    localStorage.setItem('authFlag', JSON.stringify(true));
                    //this.$router.push({name:'tasks'});
                    this.$router.replace({name:'tasks'});//elimina el history y ya no se puede retorceder libremente
                }
            }
        },
        goRegister(){
            this.$router.push({name:'register'});
        },
        alert(icon, title, text){
            this.$swal.fire(
                icon,
                title,
                text
            );
        }
    }
}
</script>

<style scoped>

</style>
