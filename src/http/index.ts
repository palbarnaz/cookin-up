import type ICategoria from "@/interfaces/ICategorias";
import axios from "axios";


export async function obterCategorias(){
  
  const resposta = await axios.get('https://gist.githubusercontent.com/palbarnaz/0269c8e5bfbe26a7fcf9f9ca83cf8f40/raw/14782d8f01470e8a32fa3ff21b1563f5476a46b0/categorias.json');



  const categorias: ICategoria[] = resposta.data;
  
  return categorias
}