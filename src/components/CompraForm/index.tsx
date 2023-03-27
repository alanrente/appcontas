import { useEffect } from "react";
import { Modal } from "antd";
import { InputMaskValor } from "components/InputMaskValor";
import { useCompraForm } from "./index.hook";

type Props = {
  visible: boolean;
  onCancel?: () => void;
};

export function CompraForm(props: Props) {
  const {
    cartoes,
    pessoas,
    handleGetPessoas,
    // handleSetValor,
    formik,
    setValorReal,
  } = useCompraForm();

  useEffect(() => {
    handleGetPessoas();
  }, []);

  return (
    <>
      <Modal
        visible={props.visible}
        onCancel={props.onCancel}
        closable={false}
        destroyOnClose
        onOk={(e: any) => {
          formik.handleSubmit(e);
          props.onCancel && props.onCancel();
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label htmlFor="valor">Valor:</label>
          <InputMaskValor id="valor" name="valor" setValor={setValorReal} />

          <label htmlFor="parcelas">Parcelas:</label>
          <input type="number" name="parcelas" id="parcelas" onChange={formik.handleChange} />

          <label htmlFor="cartoes">Cartões:</label>
          <select id="cartoes" name="cartaoId" onChange={formik.handleChange}>
            <option id="0" value={0}>
              Selecione o Cartão
            </option>
            {cartoes.map((cartao) => (
              <option id={`${cartao.id}`} value={cartao.id}>
                {`${cartao.nome}${cartao.final_numero ? ` (${cartao.final_numero})` : ""}`}
              </option>
            ))}
          </select>

          <label htmlFor="pessoas">Pessoas:</label>
          <select id="pessoas" name="pessoaId" onChange={formik.handleChange}>
            <option id="0" value={0}>
              Selecione a Pessoa
            </option>
            {pessoas.map((pessoa) => (
              <option id={`${pessoa.id}`} value={pessoa.id}>
                {`${pessoa.nome}${pessoa.apelido ? ` (${pessoa.apelido})` : ""}`}
              </option>
            ))}
          </select>

          <label htmlFor="data_compra">Data:</label>
          <input type="date" name="data_compra" id="data_compra" onChange={formik.handleChange} required />
        </div>
      </Modal>
    </>
  );
}
