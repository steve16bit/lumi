-- CreateTable
CREATE TABLE "Fatura" (
    "id" SERIAL NOT NULL,
    "numero_cliente" TEXT,
    "mes_referencia" TIMESTAMP(3),
    "energia_eletrica_kwh" DECIMAL(10,2),
    "energia_eletrica_valor" DECIMAL(10,2),
    "energia_scee_sem_icms_kwh" DECIMAL(10,2),
    "energia_scee_sem_icms_valor" DECIMAL(10,2),
    "energia_compensada_gd_kwh" DECIMAL(10,2),
    "energia_compensada_gd_valor" DECIMAL(10,2),
    "contribuicao_ilum_pub_municipal_valor" DECIMAL(10,2),
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Fatura_pkey" PRIMARY KEY ("id")
);
