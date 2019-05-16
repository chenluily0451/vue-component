<template>
  <div class="hello">
    <ComponentInput :show-clear= true :width-val= "'480px'" border-color-val="red" :input-name="'input1'" />
    <ComponentInput :show-clear= false :width-val= "'480px'" :input-name="'input2'" />
    <ComponentInput :show-clear= false :width-val= "'100%'" :input-name="'input2'" />
    <componentButton :button-val ="'提交'" />
    <componentButton :button-type="'error'"/>
    <componentButton :button-type="'disabled'" :button-val ="'自定义'"/>
  </div>
</template>

<script>
import ComponentInput from './ComponentInput.vue'
import ComponentButton from './ComponentButton.vue'
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
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
