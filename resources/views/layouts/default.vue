<template lang="pug">
Head
    title Template 
    meta(
        type="description"
        content="About my template"
        head-key="description"
    )
section.container.mx-auto.p-3.mt-5.bg-slate-100.rounded-md
    slot
</template>

<script setup></script>
