import { useEffect, useState } from "react";

import { useFormik } from "formik";

export function useFormCadastro() {
  const [devedores, setDevedores] = useState<any[]>([]);

  const formik = useFormik({
    initialValues: {
      nome: "",
      divida: 0,
    },
    onSubmit: (values) => {
      setDevedores([...devedores, values]);
      formik.setFieldValue("nome", "");
      formik.setFieldValue("divida", 0);
    },
  });

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(devedores);
  }, [devedores]);

  return {
    formik,
  };
}
