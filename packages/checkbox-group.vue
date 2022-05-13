<template>
    <div class="ll-checkbox-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'LlCheckboxgroup',
    props: {
        value:{
            type:Array
        }
    },
    provide(){
        return{
            CheckboxGroup:this
        }
    }
}
</script>

<style>

</style>