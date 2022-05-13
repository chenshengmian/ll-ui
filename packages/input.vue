<template>
    <div class="ll-input" :class="{ 'll-input__suffix': showSuffix }">
    <!-- 如果传了show_password,判断是否需要切换密码形式 -->
        <input 
            class="ll-input__inner" 
            :class="{ 'is-disabled': disabled }" 
            :placeholder="placeholder" 
            :type="showPassword ? (passwordVisible ? 'text':'password'):type"
            :name="name" :disabled="disabled" 
            :value="value" 
            @input="handleInput" 
        />
        <span class="ll-input__suffix" v-if="showSuffix">
            <i class="ll-input__icon ll-icon-chahao1" v-if="clearable && value" @click="clear"></i>
            <i class="ll-input__icon ll-icon-yanjing1" v-if="showPassword" @click="handleShow" :class="{'ll-icon-view':passwordVisible}"></i>
        </span>
    </div>
</template>

<script>
export default {
    name: "LlInput",
    data(){
        return{
            // 用于控制是否显示密码框
            passwordVisible:false
        }
    },
    props: {
        placeholder: {
            type: String,
            default: "请输入用户名"
        },
        type: {
            type: String,
            default: "text"
        },
        name: {
            type: String,
            default: "username"
        },
        disabled: {
            type: Boolean,
            default: false
        },
        value: {
            type: String,
            default: ""
        },
        clearable: {
            type: Boolean,
            default: false
        },
        showPassword: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        showSuffix() {
            return this.clearable || this.showPassword
        }
    },
    methods: {
        handleInput(e) {
            this.$emit('input', e.target.value)
        },
        clear(){
            this.$emit('input','')
        },
        handleShow(){
            this.passwordVisible = !this.passwordVisible    
        }
    }
};
</script>

<style lang="scss" scoped>
.ll-input {
    width: 100%;
    position: relative;
    font-size: 14px;
    display: inline-block;

    .ll-input__inner {
        -webkit-appearance: none;
        background-color: #fff;
        background-image: none;
        border: 1px solid #dcdfe6;
        border-radius: 4px;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        height: 40px;
        line-height: 40px;
        outline: none;
        padding: 0 15px;
        transition: border-color 0.2s cubic-bezier(0.645, 045, 0.355, 1);
        width: 100%;

        &:focus {
            outline: none;
            border-color: #409eff;
        }

        // input禁用样式
        &.is-disabled {
            background-color: #f5f7fa;
            border-color: #e4e7ed;
            color: #c0c4cc;
            cursor: not-allowed;
        }
    }
}

.ll-input__suffix {
    .ll-input__inner {
        padding-right: 30px;
    }

    .ll-input__suffix {
        position: absolute;
        right: 10px;
        height: 100%;
        top: 0;
        line-height: 40px;
        text-align: center;
        color: #c0c4cc;
        transition: all .3s;
        z-index: 900;

        i {
            color: #c0c4cc;
            font-size: 14px;
            cursor: pointer;
            transition: color .2s cubic-bezier(.645, .045, .355, 1);
            margin-right: 5px;
        }
        .ll-icon-view{
            color: #409eff;
        }
    }
}
</style>
