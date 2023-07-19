<template>
    <v-container class="teal accent-4 mt-5">
        <FormLogin></FormLogin>
    </v-container>
</template>

<script>
import FormLogin from "../../../auth/components/login/FormLogin";

export default {
    name: "LoginIndex",
    components: {FormLogin}
}
</script>

<style scoped>

</style>
