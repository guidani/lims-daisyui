import { ImagemType } from "./ImagemType";
type ConteudoType = {
  text?: string;
};

export type EventoType = {
  id?: string;
  slug?: string;
  title?: string;
  resumo?: string;
  imagem?: ImagemType;
  conteudo?: ConteudoType;
};
