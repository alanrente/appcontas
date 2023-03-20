import { useEffect } from "react";

import { useFormik } from "formik";

import { Cartao } from "interfaces/Cartao";

export function useCartaoForm(cartao?: Cartao) {
  const formik = useFormik({
    initialValues: {
      nome: "",
      dia_vencimento: 10,
      final_numero: "",
      obs: "",
    },
    onSubmit: (values) => {
      console.log("values formik cartoesform", values);
    },
  });

  useEffect(() => {
    if (!cartao) return;

    console.log(cartao);

    formik.setFieldValue("nome", cartao.nome);
    formik.setFieldValue("dia_vencimento", cartao.dia_vencimento);
    formik.setFieldValue("final_numero", cartao.final_numero);
    formik.setFieldValue("obs", cartao.obs);
  }, []);

  return {
    formik,
  };
}
