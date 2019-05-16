<template>
  <div class="container">
    <ComponentInput :show-clear= true :width-val= "'200px'" border-color-val="red" :input-name="'input1'" />
    <ComponentInput :show-clear= false :width-val= "'200px'" :input-name="'input2'" />
    <ComponentInput :show-clear= false :width-val= "'100%'" :input-name="'input2'" />
    <componentButton :button-val ="'提交'" />
    <componentButton :button-type="'error'"/>
    <componentButton :button-type="'disabled'" :button-val ="'自定义'"/>
  </div>
</template>

<script>
import ComponentInput from './common/ComponentInput.vue'
import ComponentButton from './common/ComponentButton.vue'
export default {
  name: 'ComponentContainer',
  data(){
    return {
    }
  },
  components:{
    ComponentInput,
    ComponentButton
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .container{
    padding:10px;
    width:100%;
    overflow: hidden;
    box-sizing: border-box;
  }
</style>
