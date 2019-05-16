<template>
    <div class="btnWrap">
        <button :class= buttonType>{{buttonVal}}</button>
    </div>
</template>
<script>
    export default {
        name: 'ComponentButton',
        props:{
            buttonVal:{
                type:String,
                default:'默认'
            },
            buttonType:{
                type:String,
                default:'submit'
            }
        },
        data(){
            return {}
        }
    }
</script>
<style lang="scss">
    .btnWrap{
        display: inline-block;
        margin-right: 10px;
        text-align: left;
        button{
            background: none;
            outline: none;
            min-width: 150px;
            text-align: center;
            box-shadow: none;
            color:#fff;
            border:none;
            padding:0;
            margin:0;
            min-height: 40px;

            border-radius: 5px;

            &:hover{
                opacity: .8;
                cursor: pointer;
            }
            &.submit{
                background: #83BAFF;
            }
            &.disabled{
                background: #B5B5B5;
            }
            &.error{
                background: #FF563C;
            }
        }
    }

</style>
