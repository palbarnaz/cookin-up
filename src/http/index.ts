import type ICategoria from "@/interfaces/ICategorias";
import type IReceita from "@/interfaces/IReceitas";
import axios from "axios";


export async function obterCategorias(){
  
  const resposta = await axios.get('https://gist.githubusercontent.com/palbarnaz/0269c8e5bfbe26a7fcf9f9ca83cf8f40/raw/14782d8f01470e8a32fa3ff21b1563f5476a46b0/categorias.json');



  const categorias: ICategoria[] = resposta.data;
  
  return categorias
}

export async function obterReceitas(){
  
  const resposta = await axios.get('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json');


console.log(resposta.data);

  const receitas: IReceita[] = resposta.data;
  
  return receitas
}