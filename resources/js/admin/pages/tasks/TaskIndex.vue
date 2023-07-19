<template>
    <v-container>
        <h1>Tareas</h1>
        <HomeTasks></HomeTasks>
    </v-container>
</template>

<script>
import HomeTasks from "../../components/tasks/HomeTasks";
export default {
    name: "TaskIndex",
    components: {HomeTasks}
}
</script>

<style scoped>

</style>
