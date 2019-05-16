<template>
    <div class="inputWrap" :style="{width:widthVal}">
        <div class="clear" v-show="showClear">
            <i @click="clearInput">X</i>
        </div>
        <input type="text" :name="inputName" v-model="inputdata" :style="{borderColor:borderColorVal}" >
    </div>
</template>
<script>
    export default {
        name: 'ComponentInput',
        props:{
            showClear:{
                type:Boolean,
                default:false
            },
            widthVal:{
                type:String,
                default:'100%'
            },
            borderColorVal:{
                type:String,
                default:'#ccc'
            },
            inputName:{
                type:String
            }
        },
        data(){
            return {
                inputdata : ""
            }
        },
        methods:{
            clearInput(){
                this.inputdata = "";
            }
        }
    }
</script>
<style lang="scss">
    $inputH:30px;
    $clearH:20px;
    .inputWrap{
        position: relative;
        box-sizing: border-box;
        width:100%;
        margin-bottom: 10px;
        padding-left: 0;
        i{
            font-style: normal;
            background: grey;
            color:#fff;
            border-radius:4px;
            text-align: center;
            display: inline-block;
            width:$clearH;
            height:$clearH;
            line-height: $clearH;
            position: absolute;
            right:10px;
            top: 50%;
            margin-top: -$clearH/2;
            &:hover{
                opacity: .6;
                cursor: pointer;
            }

        }
        input{
            width:100%;
            border:1px solid #ccc;
            padding-left:10px;
            border-radius: 5px;
            outline:none;
            min-height: $inputH;
            line-height: $inputH;
            font-size: 20px;
            box-sizing: border-box;
        }

    }
</style>
