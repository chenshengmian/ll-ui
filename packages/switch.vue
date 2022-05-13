<template>
    <div class="ll-switch" :class="{'is-checked': value}" @click="handleClick">
        <span class="ll-switch__core" ref="core">
            <span class="ll-switch__button"></span>
        </span>
        <input type="checkbox" class="ll-switch__input" :name="name" ref="input">
    </div>
</template>

<script>
export default {
    name: 'LlSwitch',
    props: {
        value:{
            type: Boolean,
            default: false
        },
        activeColor:{
            type: String,
            default:''
        },
        inactiveColor:{
            type: String,
            default:''
        },
        name:{
            type: String,
            default:''
        }
    },
    methods: {
        async handleClick(){
            this.$emit('input', !this.value)
            // this.$nextTick()=Vue.nextTick()基于promise封装的
            //数据修改成功后，等待DOM更新，再修改按钮的颜色
            await this.$nextTick()
            this.setColor()
            this.$refs.input.checked = this.value
        },
        setColor(){
            // 修改开关的颜色
            if(this.activeColor || this.inactiveColor){
                let color = this.value ? this.activeColor : this.inactiveColor
                this.$refs.core.style.borderColor = color
                this.$refs.core.style.backgroundColor = color
            }
        }
    },
    mounted(){
        this.setColor()
        this.$refs.input.checked = this.value
    }
}
</script>


<style lang="scss" scoped>
.ll-switch {
    display: inline-block;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    vertical-align: middle;

    .ll-switch__core {
        margin: 0;
        display: inline-block;
        position: relative;
        width: 40px;
        height: 20px;
        border: 1px solid #dcdfe6;
        outline: none;
        border-radius: 10px;
        box-sizing: border-box;
        background: #dcdfe6;
        cursor: pointer;
        transition: border-color .3s, background-color .3s;
        vertical-align: middle;

        .ll-switch__button {
            position: absolute;
            top: 1px;
            left: 1px;
            border-radius: 100%;
            transition: all .3s;
            width: 16px;
            height: 16px;
            background-color: #fff;
        }
    }
}
.is-checked {
    .ll-switch__core{
        border-color: #409eff;
        background-color: #409eff;
        .ll-switch__button {
            transform: translateX(20px);
        }
    }
}

.ll-switch__input{
    position:absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
}

</style>
