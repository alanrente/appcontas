import { useEffect, useState } from "react";

import { useFormik } from "formik";

import { useSomatorioContext } from "../../hooks/useSomatorioContext";

export function useFormCadastro() {
  const [devedores, setDevedores] = useState<any[]>([]);

  const { somatorio, setSomatorio } = useSomatorioContext();

  const formik = useFormik({
    initialValues: {
      nome: "",
      divida: 0,
    },
    onSubmit: (values) => {
      setDevedores([...devedores, values]);
      formik.setFieldValue("nome", "");
      formik.setFieldValue("divida", 0);
      setSomatorio(somatorio + values.divida);
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