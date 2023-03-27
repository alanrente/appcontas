import { useState } from "react";
import { useFormik } from "formik";
import { Compra } from "interfaces/Compra";
import { Devedores } from "interfaces/Devedores";
import { useCartao } from "pages/Cartao/index.hook";
import { postNovaCompra } from "services/compras";
import { getDevedores } from "services/devedores";

export function useCompraForm() {
  const { cartoes } = useCartao();

  const [pessoas, setPessoas] = useState<Devedores[]>([]);
  const [valorReal, setValorReal] = useState(0);

  const formik = useFormik({
    initialValues: {
      valor: "0,00",
      parcelas: 0,
      cartaoId: 0,
      pessoaId: 0,
      data_compra: "",
    },
    onSubmit: async (values) => {
      const novaCompraValues = {
        ...values,
        cartaoId: +values.cartaoId,
        pessoaId: +values.pessoaId,
        valor: valorReal,
        parcelas: values.parcelas > 0 ? values.parcelas : 1,
      };

      await handleNovaCompra(novaCompraValues);
    },
  });

  async function handleNovaCompra(novaCompra: Compra) {
    try {
      await postNovaCompra(novaCompra);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleGetPessoas() {
    const _pessoas = await getDevedores();

    if (!_pessoas) return setPessoas([]);

    setPessoas(_pessoas);
  }

  return {
    cartoes,
    pessoas,
    handleGetPessoas,
    formik,
    valorReal,
    setValorReal,
  };
}
