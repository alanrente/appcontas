export interface Pessoa {
  id: number;
  nome: string;
}

export interface Cartao {
  id: number;
  nome: string;
}

export interface GastoMapped {
  id: number;
  descricao: string;
  data_compra: string;
  data_cadastro: string;
  parcelas?: number;
  valor: string;
  pessoa: string;
  cartao: string;
}
export interface Gasto {
  id: number;
  descricao: string;
  data_compra: string;
  data_cadastro: string;
  parcelas?: number;
  valor: string;
  pessoa: Pessoa;
  cartao: Cartao;
}
export interface Gasto_old {
  id: number;
  id_cartao: number;
  cartao: string;
  id_pessoa: number;
  pessoa: string;
  valor: number;
  descricao?: string;
  data_compra: string;
  parcelas?: string;
  data_final?: string;
}
