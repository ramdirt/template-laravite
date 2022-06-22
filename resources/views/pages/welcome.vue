<template lang="pug">
Row
  Col(span="12")
    Title Template 2
Row
  Col(span="4")
    p {{ statusState }}
    p {{ statusInertia }}
    p {{ count }}
  Col(span="12")
    Button(
      type="primary"
      @click="increaseCount(5)"
    ) Добавить 5
Row.mt-5
  Col(span="12")
    Link(
      href="/"
    ) Пример ссылки
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
