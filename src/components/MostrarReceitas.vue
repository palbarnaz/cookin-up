<script lang="ts">
import { obterReceitas } from '@/http';
import BotaoPrincipal from './BotaoPrincipal.vue';
import type IReceita from "@/interfaces/IReceitas";
import  CardReceita from './CardReceita.vue';
import { PropType } from 'vue';


export default {
  props:{
   ingredientes: { type: Array as PropType<string[]>, required: true }
  },
  data(){
    return{
      receitas: [] as IReceita[]
    };
  },
  async created (){
    const resposta =  await obterReceitas();  
    this.receitas = resposta.filter((receita)=>{
        return receita.ingredientes.every((item=> this.ingredientes.includes(item)));
    })
    
  },
  components : { BotaoPrincipal, CardReceita },
  emits: ['mostrarReceitas']
}
</script>

<template>
<section class="selecionar-ingredientes">
    <h1 class="cabecalho titulo">Receitas</h1>
    <p class="instrucoes titulo paragrafo-resultado">
      Resultados encontrados: {{ receitas.length ?? 0 }}
    </p>
    <p class="paragrafo-lg instrucoes">
      {{receitas.length ? 'Veja as opções de receitas que encontramos com os ingredientes que você tem por ai!' :  'Ops! não encontramos resultados para sua combinação. Vamos tentar de novo?' }} 
    </p>

    <ul v-if="receitas.length" class="categorias">
      <li  v-for="receita in receitas" :key="receita.nome">
        <CardReceita :receita="receita"/>
      </li>
    </ul>
    <img v-else src="../assets/images/sem-receitas.png">

    <BotaoPrincipal @click="$emit('mostrarReceitas')"  texto="Editar Lista!" />
  </section>
</template> 

<style scoped>

.selecionar-ingredientes {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.titulo {
  color: var(--verde-medio, #3d6d4a);
  display: block;
  margin-bottom: 1.5rem;
}

.instrucoes {
  margin-bottom: 3rem;
}

.paragrafo-resultado{
 font-size: 1.2rem;
}

.categorias {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}



@media only screen and (max-width: 767px) {
  .dica {
    margin-bottom: 2.5rem;
  }
}
</style>