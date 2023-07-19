<template>
    <v-card
        height="100%"
        width="256"
        class="mx-auto"
    >
        <v-navigation-drawer permanent>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="text-h6">
                        Todo App
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        Evaluation
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list
                dense
                nav
            >
                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    :to="{name: item.to}"
                    link
                >
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </v-card>
</template>

<script>
export default {
    name: "Sidebar",
    data() {
        return {
            items: [
                {
                    title: 'Crear tarea',
                    icon: 'mdi-plus-box',
                    to: 'create-task'
                },
                {
                    title: 'Listar tareas',
                    icon: 'mdi-format-list-bulleted-square',
                    to: 'tasks'
                },
                {
                    title: 'Listar tareas completadas',
                    icon: 'mdi-clipboard-check-outline',
                    to: 'completed-tasks'
                },
                {
                    title: 'Listar tareas pendientes',
                    icon: 'mdi-clipboard-clock-outline',
                    to: 'pending-tasks'
                },
                {
                    title: 'Completar tarea',
                    icon: 'mdi-check-circle',
                    to: 'complete-task'
                },
                {
                    title: 'Borrar tarea',
                    icon: 'mdi-delete',
                    to: 'delete-task'
                },
                {
                    title: 'Login',
                    icon: 'mdi-login',
                    to: 'login'
                },
                {
                    title: 'Log out',
                    icon: 'mdi-logout',
                    to: ''
                },
            ]
        }
    }
}
</script>

<style scoped>

</style>
