<template>
    <label class="ll-radio" :class="{'is-checked':label===value}">
        <span class="ll-radio__input">
            <span class="ll-radio__inner"></span>
            <input 
                type="radio" 
                class="ll-radio__original"
                :value="label"
                :name="name"
                v-model="model"
            >
        </span>
        <span class="ll-radio__label">
            <slot></slot>
            <!-- 如果没有传值，就把label作为文本显示 -->
            <template v-if="!$slots.default">{{label}}</template>
        </span>
    </label>
</template>

<script>

export default {
    name: 'LlRadio',
    inject:{
        RadioGroup:{
            default:''
        }
    },
    // 提供一个计算属性
    computed:{
        model:{
            get(){
                return this.isGroup ? this.RadioGroup.value : this.value
            },
            set(value){
                // 触发父组件的input事件
                this.$emit('input',value)
                this.isGroup ? this.RadioGroup.$emit('input',value) : this.$emit('input',value)
            }
        },
        isGroup(){
            // 用于判断radio是否被radioGroup包裹
            return !!this.RadioGroup
        }
    },
    props:{
        label:{
            type:[String,Number,Boolean],
            default:''
        },
        value:null,
        name:{
            type:String,
            default:''
        }
    }
}
</script>

<style lang="scss" scoped>
.ll-radio {
    color: #606266;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: none;
    font-size: 14px;
    margin-right: 30px;
    -moz-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;

    .ll-radio__input {
        white-space: nowrap;
        cursor: pointer;
        outline: none;
        display: inline-block;
        line-height: 1;
        position: relative;
        vertical-align: middle;

        .ll-radio__inner {
            border: 1px solid #dcdfe6;
            border-radius: 100%;
            width: 14px;
            height: 14px;
            background-color: #fff;
            position: relative;
            cursor: pointer;
            display: inline-block;
            box-sizing: border-box;

            &:after {
                width: 4px;
                height: 4px;
                border-radius: 100%;
                background-color: #fff;
                content: "";
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%) scale(0);
                transition: transform .15s ease-in;
            }
        }

        .ll-radio__original {
            opacity: 0;
            outline: none;
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0px;
            right: 0;
            bottom: 0;
            margin: 0;
        }
    }

    .ll-radio__label {
        font-size: 14px;
        padding-left: 10px;
        ;
    }
}

// 选中的样式
.ll-radio.is-checked {
    .ll-radio__input {
        .ll-radio__inner {
            border-color: #409eff;
            background-color: #409eff;

            &:after {
                transform: translate(-50%, -50%) scale(1);
            }
        }
    }

    .ll-radio__label {
        color: #409eff;
    }
}
</style>