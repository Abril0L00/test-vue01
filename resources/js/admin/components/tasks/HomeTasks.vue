<template>
    <v-container>
        <template v-if="arrayTasks">
            <v-row v-for="task in arrayTasks" :key="task.id" class="my-3">
                <v-col :class="task.stateId === 1? 'blue' : (task.stateId === 2 ? 'yellow' : 'green')">
                    {{ task.description }}  |  Estado: {{ task.stateId === 1? 'Pendiente' : (task.stateId === 2 ? 'Trabajando' : 'Terminada') }}
                </v-col>
            </v-row>
        </template>
        <template v-else>
            <v-row>
                <v-col>
                    No hay tareas registradas
                </v-col>
            </v-row>
        </template>
    </v-container>
</template>

<script>
export default {
    name: "HomeTasks",
    data(){
        return {
            arrayTasks: []
        }
    },
    mounted(){
        this.getTasks();
    },
    methods:{
        getTasks(){
            this.arrayTasks = JSON.parse(localStorage.getItem('arrayTasks'));
        }
    }
}
</script>

<style scoped>

</style>
