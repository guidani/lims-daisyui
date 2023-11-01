import { ImagemType } from "./ImagemType";

export type PostagemType = {
  id?: string;
  slug?: string;
  title?: string;
  resumo?: string;
  imagem?: ImagemType;
};
