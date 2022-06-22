<template lang="pug">
h1 Hello World
p {{ statusState }}
p {{ statusInertia }}
p {{ count }}
Link.link(
  href="/"
) На главную
button.btn-primary(
  @click="increaseCount(5)"
) Добавить 5
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { usePage } from "@inertiajs/inertia-vue3";

const store = useStore();

const increaseCount = (value) =>
    store.dispatch("module/increaseCount", { value });
const statusState = computed(() => store.getters["module/getStatus"]);
const count = computed(() => store.getters["module/getCount"]);
const statusInertia = computed(() => usePage().props.value.status);
</script>

<style lang="sass" scoped>
h1
    background-color: white
</style>
