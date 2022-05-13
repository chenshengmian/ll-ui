<template>
    <div class="ll-form-item">
        <label :style="labelStyle" class="ll-form-item__label">{{ label }}</label>
        <div class="ll-form-item_content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LlFormItem',
    props: {
        label: {
            type: String,
            default: ''
        }
    },
    inject: ['Form'],
    computed: {
        labelStyle() {
            return {
                width: this.Form.labelWidth
            }
        }
    }
}
</script>


<style lang="scss" scoped>
.ll-form-item {
    margin-bottom: 25px;

    .ll-form-item__label {
        text-align: right;
        vertical-align: middle;
        float: left;
        font-size: 14px;
        color: #606266;
        line-height: 40px;
        padding: 0 12px 0 0;
        box-sizing: border-box;
    }

    .ll-form-item__content {
        line-height: 40px;
        position: relative;
        font-size: 14px;
        overflow: hidde;
    }
}
</style>
