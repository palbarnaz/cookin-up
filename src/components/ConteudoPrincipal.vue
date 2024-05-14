<script lang="ts">
import SelecionaIngredientes from "./SelecionaIngredientes.vue";
import SuaLista from "./SuaLista.vue";


export default {
  data() {
    return {
      ingredientes: [] as string[],
    };
  },
  components: { SelecionaIngredientes,  SuaLista },
  methods:{
    adicionarIngrediente(ingrediente: string){
      this.ingredientes.push(ingrediente)
    },
    deletarIngrediente(ingrediente: string){
      this.ingredientes.map((item, index)=>{
        if(item == ingrediente){
           this.ingredientes.splice(index, 1) 
        }

       
      })

      
      

      
    },
  }

};
</script>

<template>
  <main class="conteudo-principal">
     <SuaLista :ingredientes="ingredientes"/>
    <SelecionaIngredientes @deletar-ingrediente="deletarIngrediente" @adicionar-ingrediente="adicionarIngrediente" />
  </main>
</template>


<style scoped>
.conteudo-principal {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--creme, #fffaf3);
  color: var(--cinza, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}



@media only screen and (max-width: 1300px) {
  .conteudo-principal {
    padding: 5rem 3.75rem;
    gap: 3.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .conteudo-principal {
    padding: 4rem 1.5rem;
    gap: 4rem;
  }
}
</style>