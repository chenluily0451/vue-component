<template>
  <div class="container">
    <ComponentInput :show-clear= true :width-val= "'200px'" :border-color-val="'red'" :input-name="'input1'" @innerInputVal="updateVal" />
    <ComponentInput :show-clear= false :width-val= "'200px'" :input-name="'input2'" :border-color-val="'blue'"/>
    <ComponentInput :show-clear= false :width-val= "'100%'" :input-name="'input2'" />
    <componentButton :button-val ="'提交'" />
    <componentButton :button-type="'error'" :button-val ="'错误'" @click.native="toast" />
    <componentButton :button-type="'disabled'" :button-val ="'自定义'" @click.native="addCount" />{{count}}
  </div>
</template>

<script>
import ComponentInput from './common/ComponentInput.vue'
import ComponentButton from './common/ComponentButton.vue'
import { store, mutations } from "../store";
export default {
  name: 'ComponentContainer',
  computed:{
    count:function () {
      return store.count;
    }
  },
  components:{
    ComponentInput,
    ComponentButton
  },
  methods:{
    updateVal(data){
      alert(data)
    },
    addCount:function () {
      mutations.setCount(store.count + 1)
    },
    toast(){
      this.$toast({content:"这是个弹窗",duration:500});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .container{
    padding:10px;
    width:100%;
    overflow: hidden;
    box-sizing: border-box;
  }
</style>
