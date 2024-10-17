export interface Fatura {
  id: number;
  numero_cliente: string;
  mes_referencia: Date;
  energia_eletrica_kwh: number;
  energia_eletrica_valor: number;
  energia_scee_sem_icms_kwh: number;
  energia_scee_sem_icms_valor: number;
  energia_compensada_gd_kwh: number;
  energia_compensada_gd_valor: number;
  contribuicao_ilum_pub_municipal_valor: number;
  consumo_total_kwh: number;
  valor_total_sem_gd: number;
  economia_gd_valor: number;
  criado_em: Date;
}
