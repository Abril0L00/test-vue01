<template>
    <v-app>
        <v-row>
            <v-col cols="auto">
                <Sidebar></Sidebar>
            </v-col>
            <v-col>
                <router-view></router-view>
            </v-col>
        </v-row>
    </v-app>
</template>

<script>
import Sidebar from "../commons/Sidebar";

export default {
    name: "App",
    components: {Sidebar}
}
</script>

<style scoped>

</style>
