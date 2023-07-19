<template>
    <v-container>
        <template v-if="arrayPendingTasks && arrayPendingTasks.length > 0">
            <v-row v-for="task in arrayPendingTasks" :key="task.id" class="my-3">
                <v-col>
                    {{ task.description }}  |  Estado: {{ task.stateId === 1? 'Pendiente' : (task.stateId === 2 ? 'Trabajando' : 'Terminada') }}
                </v-col>
            </v-row>
        </template>
        <template v-else>
            <v-row>
                <v-col>
                    No hay tareas pendientes
                </v-col>
            </v-row>
        </template>
    </v-container>
</template>

<script>
export default {
    name: "HomePendingTasks",
    data(){
        return {
            arrayPendingTasks: []
        }
    },
    mounted(){
        this.getPendingTasks();
    },
    methods: {
        getPendingTasks(){
            this.arrayTasks = JSON.parse(localStorage.getItem('arrayTasks'));
            if (this.arrayTasks) {
                this.arrayPendingTasks = this.arrayTasks.filter( task => task.stateId == 1);
            }
        }
    }
}
</script>

<style scoped>

</style>
