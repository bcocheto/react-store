import { Pessoa } from './Pessoa';

export type Presenca = {
  id: number;
  data: string;
  situacao: boolean;
  pessoa: Pessoa;
};
