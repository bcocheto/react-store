import { Pessoa } from './Pessoa';

export type Presenca = {
  id_presenca: number;
  data: string;
  situacao: boolean;
  pessoa_id_pessoa: Pessoa;
};
