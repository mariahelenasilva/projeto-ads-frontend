// export interface Lancamento {
//   id: number;
//   descricao: string;
//   valor: number;
//   data_lancamento: Date;
//   observacao: string;
//   categoria_id: number;
//   usuario_id: number;
// }

// export type LancamentoInput = Omit<Lancamento, 'id'>;


export interface LancamentoRequest {
  descricao: string;
  valor: number;
  dataLancamento: string; // yyyy-MM-dd
  observacao: string | null;
  categoriaId: number;
}
export interface LancamentoResponse extends LancamentoRequest {
  id: number;
  categoriaDescricao: string;
  usuarioId: number;
}
