<template>
    <v-container>
        <h1>Crear Tarea</h1>
        <v-form ref="form">
            <v-row>
                <v-col cols="12">
                    <v-text-field v-model="newTask.description"
                                 :rules="rules.description"
                                 label="Descripción"
                    ></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-select v-model="newTask.stateId"
                              :rules="rules.stateId"
                              :items="itemsState"
                              item-text="name"
                              item-value="id"
                              label="Estado"
                    ></v-select>
                </v-col>
                <v-col cols="12" class="text-cente">
                    <v-btn @click="addTask">Agregar</v-btn>
                </v-col>
            </v-row>
        </v-form>
    </v-container>
</template>

<script>
import { v4 as uuidv4} from 'uuid';

export default {
    name: "CreateTask",
    data(){
        return {
            newTask: {
                id: null,
                description: '',
                stateId: null,
            },
            itemsState: [{id: 1, name:'Pendiente'}, {id:2, name:'Trabajando'}, {id: 3, name:'Terminada'}],
            rules: {
                description: [ v => !!v || 'La descripción es requerida'],
                stateId: [ v => !!v || 'El estado es requerido']
            }
        }
    },
    methods:{
        addTask(){
            const valid = this.$refs.form.validate();
            if(valid){
                this.newTask.id = uuidv4();
                let arrayTasks = JSON.parse(localStorage.getItem('arrayTasks'));
                if (!arrayTasks){
                    arrayTasks = [{...this.newTask}]
                }else{
                    arrayTasks.push({...this.newTask});
                }
                localStorage.setItem('arrayTasks',JSON.stringify(arrayTasks));
                this.$refs.form.reset();
            }
        }
    }
}
</script>

<style scoped>

</style>
