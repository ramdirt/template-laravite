<template lang="pug">
Head
    title Template 
    meta(
        type="description"
        content="About my template"
        head-key="description"
    )
section.container.max-w-screen-xl.mx-auto.p-3.bg-slate-200
    slot
</template>

<script setup></script>
