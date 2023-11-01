import { ImagemType } from "./ImagemType";

type ConteudoType = {
  text?: string;
};

export type PostagemType = {
  id?: string;
  slug?: string;
  title?: string;
  resumo?: string;
  imagem?: ImagemType;
  conteudo?: ConteudoType;
};
