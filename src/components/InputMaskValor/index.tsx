import { useInputMaskValor } from "./index.hook";

type Props = {
  // eslint-disable-next-line no-unused-vars
  onChange?: (event: any) => void;
  // value?: string | number | readonly string[];
  id?: string;
  name?: string;
  // eslint-disable-next-line no-unused-vars
  setValor: (valorADefinir?: any) => any;
  initialValue?: number;
};

export function InputMaskValor(props: Props) {
  const { id, name, setValor, initialValue } = props;
  const { handleSetValor, outputMaskValor } = useInputMaskValor(setValor, initialValue);
  return <input type="text" id={id} name={name} onChange={handleSetValor} value={outputMaskValor} />;
}
