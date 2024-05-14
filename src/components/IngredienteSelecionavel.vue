<script lang="ts">
import Tag from './Tag.vue';

export default{
  components:{Tag},
  props:{
    ingrediente:{type:String, required:true}
  },
  data(){
    return{
      selecionado:false
    }
  },
  methods:{
    aoClicar(){
      this.selecionado = !this.selecionado

      if(this.selecionado){
        this.$emit('adicionarIngrediente', this.ingrediente)
        return;
        
      }

      this.$emit('removerIngrediente', this.ingrediente)
    }
  },
  emits:['adicionarIngrediente', 'removerIngrediente']
}

</script>




<template>
  <!-- @click -->
<button class="ingrediente" :aria-pressed="selecionado" v-on:click="aoClicar">
  <Tag :texto="ingrediente"  :ativa="selecionado"/>
</button>
</template>


<style scoped>
.ingrediente{
cursor: pointer;
}
</style>