<template>
    <div class="ll-form">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'LlForm',
    provide() {
        return {
            Form: this
        }
    },
    props: {
        model: {
            type: String,
            default: ''
        },
        labelWidth: {
            type: String,
            default: '80px'
        }

    }
}
</script>

<style>
</style>