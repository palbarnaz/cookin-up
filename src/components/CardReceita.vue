<script lang="ts">
import { PropType } from 'vue';
import type IReceita from '@/interfaces/IReceitas';
import Tag from './Tag.vue';

export default {
    props: {
        receita: { type: Object as PropType<IReceita>, required: true }
    },
    components: { Tag }
}
</script>

<template >
  <article class="receita">
    <header class="receita__cabecalho">
      <div class="receita__imagem" :style="{'background-image': `url(../../public/imagens/receitas/${receita.imagem})` }"></div>
      <h2 class="paragrafo-lg receita__nome">{{ receita.nome }}</h2>
    </header>
    <ul class="receita__ingredientes">
      <li v-for="ingrediente in receita.ingredientes"  :key="receita.nome">
        
        <Tag :texto="ingrediente"  :ativa="false"/>

      </li>
    </ul>
  </article>
</template>


<style scoped>
.receita {
  padding: 1rem;
  width: 19.5rem;
  background: var(--branco, #FFF);
  box-shadow: 4px 4px 10px 0px rgba(68, 68, 68, 0.05);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.receita__cabecalho {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.receita__imagem {
  height: 152px;
  width: 300px;
  background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
 
}

.receita__nome {
  text-align: center;
  color: var(--verde-medio, #3D6D4A);
  font-weight: 700;
}

.receita__ingredientes {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

</style>