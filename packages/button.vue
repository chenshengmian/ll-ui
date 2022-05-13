<template>
    <button class="ll-button" :class="[`ll-button--${type}`,{
        'is-plain' : plain,
        'is-round' : round,
        'is-circle': circle,
        'is-disabled':disabled
    }]"
        @click="handleClick"
    > 
    <i v-if="icon" :class="icon"></i>
    <!-- 如果没有传入任何内容  当我们没有传入插槽的时候-->
    <span v-if="$slots.default"><slot></slot></span></button>
</template>

<script>
    export default {
        name:'LlButton',
        // 封装一个通用的组件，会对props做一个约束，props进行校验
        props: {
            type:{
                type:String,
                default:'default'
            },
            plain:{
                type:Boolean,
                default:false
            },
            round:{
                type:Boolean,
                default:false
            },
            circle:{
                type:Boolean,
                default:false
            },
            icon:{
                type:String,
                default:'default'
            },
            disabled:{
                type:Boolean,
                default:false
            }

        },
        // created(){
        //     console.log(this.plain);
        // },
        methods:{
            handleClick (e) {
                this.$emit('click',e);
            }
        }
    }
</script>

<style lang="scss" scoped>
    // 普通按钮样式
    .ll-button{
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: #fff;
        border: 1px solid #dcdfe6;
        color: #606266;
        -webkit-appearance: none;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        margin: 0;
        transition: .1s;
        font-weight: 500;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        padding: 12px 20px;
        font-size: 14px;
        border-radius: 4px;
        &:hover,
        &:focus{
            color:#409eff;
            border-color: #c6e2ff;
            background-color: #ecf5ff;
        }
    }
    .ll-button--primary{
        color: #fff;
        background-color: #409eff;
        border-color: #409eff;
        &:hover,
        &:focus{
            background-color:#66b1ff;
            border-color: #66b1ff;
            color: #fff;
        }
    }
    .ll-button--success{
        color: #fff;
        background-color: #67c23a;
        border-color: #67c23a;
        &:hover,
        &:focus{
            background-color:#85ce61;
            border-color: #85ce61;
            color: #fff;
        }
    }
    .ll-button--info{
        color: #fff;
        background-color: #909399;
        border-color: #909399;
        &:hover,
        &:focus{
            background-color:#a6a9ad;
            border-color: #a6a9ad;
            color: #fff;
        }
    }
    .ll-button--warning{
        color: #fff;
        background-color: #a6a23c;
        border-color: #a6a23c;
        &:hover,
        &:focus{
            background-color:#abb563;
            border-color: #abb563;
            color: #fff;
        }
    }
    .ll-button--danger{
        color: #fff;
        background-color: #f56c6c;
        border-color: #f56c6c;
        &:hover,
        &:focus{
            background-color:#f78989;
            border-color: #f78989;
            color: #fff;
        }
    }

    // 镂空按钮样式
    .ll-button.is-plain{
        &:hover,
        &:focus{
            background: #fff;
            border-color: #489eff;
            color: #409eff;
        }
    }
    .ll-button--primary.is-plain{
        color: #409eff;
        background: #ecf5ff;
        &:hover,
        &:focus{
            background: #409eff;
            border-color: #409eff;
            color: #fff;
        }
    }
    .ll-button--success.is-plain{
        color: #67c23a;
        background: #c2e7b0;
        &:hover,
        &:focus{
            background: #67c23a;
            border-color: #67c23a;
            color: #fff;
        }
    }
    .ll-button--info.is-plain{
        color: #909399;
        background: #d3d4d6;
        &:hover,
        &:focus{
            background: #909399;
            border-color: #909399;
            color: #fff;
        }
    }
    .ll-button--warning.is-plain{
        color: #e6a23c;
        background: #f5dab1;
        &:hover,
        &:focus{
            background: #e6a23c;
            border-color: #e6a23c;
            color: #fff;
        }
    }
    .ll-button--danger.is-plain{
        color: #f56c6c;
        background: #fbc4c4;
        &:hover,
        &:focus{
            background: #f56c6c;
            border-color: #f56c6c;
            color: #fff;
        }
    }

    // 半圆按钮样式
    .ll-button.is-round{
        border-radius: 20px;
        padding: 12px 23px;
    }

    // 圆形按钮样式
    .ll-button.is-circle{
        border-radius: 50%;
        padding: 12px;
    }

    // 文字与图片之间的间隔
    .ll-button [class*=ll-icon-]+span{
        margin-left: 5px;
    }

    // 按钮禁用样式
    .ll-butto.is-disabled{
        cursor: no-drop;
    }


</style>