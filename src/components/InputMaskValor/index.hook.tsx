import { useState, useEffect } from "react";

export function useInputMaskValor(setValor: any, initialValue?: number) {
  // const [valorReal, setValorReal] = useState(0);
  const [outputMaskValor, setoutputMaskValor] = useState("0,00");

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
    const strValorRecebido = event ? `${event.target.value}` : `${Number(initialValue) * 100}`;
    if (!strValorRecebido) return;

    const maskValorSemMilhar = handleMaskValor(strValorRecebido);

    const parteFracionado = Number(maskValorSemMilhar.replace(",", "."));

    setValor(parteFracionado);

    const maskValorComMilhar = `${handleMaskPointerValor(maskValorSemMilhar.split(",")[0])},${
      maskValorSemMilhar.split(",")[1]
    }`;

    setoutputMaskValor(maskValorComMilhar);
  }

  useEffect(() => {
    if (!initialValue) return;
    handleSetValor(null);
  }, []);

  return { handleSetValor, outputMaskValor };
}
