<template>
    <v-container class="teal accent-4 mt-5">
        <FormRegister></FormRegister>
    </v-container>
</template>

<script>
import FormRegister from "../../../auth/components/register/FormRegister";
export default {
    name: "RegisterIndex",
    components: {FormRegister}
}
</script>

<style scoped>

</style>
