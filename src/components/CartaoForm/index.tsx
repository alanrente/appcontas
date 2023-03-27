import { Input, Modal } from "antd";
import TextArea from "antd/lib/input/TextArea";

import { Cartao } from "interfaces/Cartao";
import { useCartaoForm } from "./index.hook";

type Props = {
  visible: boolean;
  cartao?: Cartao;
  onCancel: () => void;
};

export function CartaoForm(props: Props) {
  const { visible, cartao, onCancel } = props;

  const { formik } = useCartaoForm(cartao);

  return (
    <>
      <Modal
        visible={visible}
        onCancel={onCancel}
        okText="Salvar"
        closable={false}
        onOk={(e: any) => {
          formik.handleSubmit(e);
          onCancel();
        }}
      >
        <label htmlFor="nome">Nome</label>
        <Input name="nome" id="nome" value={cartao?.nome} onChange={formik.handleChange} />
        <label htmlFor="dia_vencimento">Vencimento</label>
        <Input
          name="dia_vencimento"
          id="dia_vencimento"
          type="number"
          value={cartao?.dia_vencimento}
          onChange={formik.handleChange}
        />
        <label htmlFor="final_numero">Final Número</label>
        <Input name="final_numero" id="final_numero" value={cartao?.final_numero} onChange={formik.handleChange} />
        <label htmlFor="obs">Obs</label>
        <TextArea name="obs" id="obs" value={cartao?.obs} onChange={formik.handleChange} />
      </Modal>
    </>
  );
}
