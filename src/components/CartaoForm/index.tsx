import { useEffect } from "react";

import { Input, Modal } from "antd";

import { useCartaoForm } from "./index.hook";

type Props = {
  visible: boolean;
  idCartao?: number;
  onCancel: () => void;
};

export function CartaoForm(props: Props) {
  const { visible, idCartao, onCancel } = props;

  const { handleLoadCartao, formik } = useCartaoForm();

  useEffect(() => {
    if (!idCartao) return;

    handleLoadCartao(idCartao);
  }, [idCartao]);

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
        <Input name="bank" value={formik.values.bank} onChange={formik.handleChange} />
      </Modal>
    </>
  );
}
