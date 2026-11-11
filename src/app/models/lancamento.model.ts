
export interface Lancamento {
  id: number;
  descricao: string;
  valor: number;
  data_lancamento: Date;
  observacao: string;
  categoria_id: number;
  usuario_id: number;
}

export type LancamentoInput = Omit<Lancamento, 'id'>;