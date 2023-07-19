<template>
    <v-container>
        <h1>Tareas pendientes</h1>
        <HomePendingTasks></HomePendingTasks>
    </v-container>
</template>

<script>
import HomePendingTasks from "../../components/pendingTasks/HomePendingTasks";
export default {
    name: "PendingTasksIndex",
    components: {HomePendingTasks}

}
</script>

<style scoped>

</style>
