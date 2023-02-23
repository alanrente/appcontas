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

  function handleMaskValor(valor: string) {
    const valorSemVirgula = valor.replace(/[/./,/]/g, "");

    const sliceValorPreVirgula = Number(valorSemVirgula.slice(0, valorSemVirgula.length - 2));
    const sliceValorPosVirgula = valorSemVirgula.slice(valorSemVirgula.length - 2);

    const sizeUpTwoo = valorSemVirgula.length > 2;

    const zeroMoreValue = `0,${sliceValorPosVirgula}`;
    const valueMoreValue = `${sliceValorPreVirgula},${sliceValorPosVirgula}`;

    const maskValor = `${sizeUpTwoo ? valueMoreValue : zeroMoreValue}`;

    return maskValor;
  }

  function handleMaskPointerValor(partePreVirgula: string) {
    if (partePreVirgula.length < 4) return partePreVirgula;
    let contador = 0;
    let outputString = "";
    const invertPositionArray = Array.from(partePreVirgula).reduceRight((a, b) => a + b);

    Array.from(invertPositionArray).forEach((ele) => {
      if (contador === 3) {
        outputString = outputString + "." + ele;
        contador = 1;
      } else {
        outputString = outputString + ele;
        contador++;
      }
    });

    const invertOriginalPosition = Array.from(outputString).reduceRight((a, b) => a + b);

    return invertOriginalPosition;
  }

  function handleSetValor(event: any) {
    const strValorRecebido = `${event.target.value}`;
    const maskValorSemMilhar = handleMaskValor(strValorRecebido);

    const parteFracionado = Number(maskValorSemMilhar.replace(",", "."));

    setValorReal(parteFracionado);

    const maskValorComMilhar = `${handleMaskPointerValor(maskValorSemMilhar.split(",")[0])},${
      maskValorSemMilhar.split(",")[1]
    }`;

    formik.setFieldValue("valor", maskValorComMilhar);
  }

  return {
    cartoes,
    pessoas,
    handleGetPessoas,
    handleSetValor,
    formik,
    valorReal,
    setValorReal,
  };
}
