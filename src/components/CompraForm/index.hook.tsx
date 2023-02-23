import { useState } from "react";
import { useFormik } from "formik";
import { Devedores } from "interfaces/Devedores";
import { useCartao } from "pages/Cartao/index.hook";
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
      console.log({ ...values, cartaoId: +values.cartaoId, pessoaId: +values.pessoaId, valor: valorReal });
    },
  });

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
