// 整个包的入口
// 定义install方法，接收Vue作为参数。如果使用use注册插件，则所有的组件都将被注册 
import Button from './button'
import Dialog from './dialog'
import Input from './input'
import Checkbox from './checkbox'
import Radio from './radio'
import RadioGroup from './radio-group'
import Switch from './switch'
import CheckboxGroup from './checkbox-group'
import Form from './form'
import FormItem from './form-item'
import './fonts/iconfonts.css'


const components = [
    Button,
    Dialog,
    Input,
    Checkbox,
    Radio,
    RadioGroup,
    Switch,
    CheckboxGroup,
    Form,
    FormItem
]

const install = (Vue)=> {
    // 注册所有的组件
    components.forEach(item => {
        Vue.component(item.name,item)
    })
}

// 判断是否直接引入文件，如果是，就不用调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}  

export default {
    install
}