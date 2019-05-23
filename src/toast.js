import Vue from "vue";
import toast from "./components/common/ComponentToast";


let ToastConstrutor = Vue.extend(toast);
let instance;

const Toast = function (options={}) {
    instance = new ToastConstrutor({
        data:options
    }).$mount();
    document.body.appendChild(instance.$el);
}

export default Toast;
