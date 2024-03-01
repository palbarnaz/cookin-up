<script lang="ts">
import ICategoria from '@/interfaces/ICategorias';
import { PropType } from 'vue';



export default {
    props:  {
      categoria: {type: Object as PropType<ICategoria>, required:true}
  }
}
</script>




<template >
  <article class="categoria">
    <header class="categoria_cabecalho">
      <img src="" alt="">
    </header>

    

  </article>
 
</template>>