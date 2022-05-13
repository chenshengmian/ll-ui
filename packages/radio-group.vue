<template>
    <div class="ll-radio-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'LlRadiogroup',
    provide(){
        return{
            RadioGroup:this
        }
    },
    props:{
        //ll-radio-group接收到了value值
        // 将来还需要触发 当前组件的input事件
        // provide与 inject 
        value:null
    }
}
</script>

<style>

</style>