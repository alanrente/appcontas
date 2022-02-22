import { useEffect } from "react";

import { useFormik } from "formik";

import { obterUmCartao } from "services/cartoes";

export function useCartaoForm(idCartao?: number) {
  const formik = useFormik({
    initialValues: {
      bank: "",
    },
    onSubmit: (values) => {
      // eslint-disable-next-line no-console
      console.log(values);
    },
  });

  async function handleLoadCartao(id?: number) {
    if (!id) return;
    const data = await obterUmCartao(id);

    if (!data) return;

    formik.setValues(data);
  }

  useEffect(() => {
    if (!idCartao) return;

    handleLoadCartao(idCartao);
  }, []);

  return {
    formik,
    handleLoadCartao,
  };
}
