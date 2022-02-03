import { Button, TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useFormCadastro } from './index.hook';


export const FormCadastro = () => {

    const {formik} = useFormCadastro();

    const router = useHistory();

    return (
        <>
            <Button onClick={() => router.push("/")} variant='outlined' >Home</Button>
            <form onSubmit={(e) => {
                e.preventDefault();
                formik.handleSubmit();
                }} 
                className="formCadastroDevedores">
                <TextField
                    className="inputNome"
                    id="outlined-search"
                    variant="outlined"
                    placeholder="Nome"
                    type="text"
                    name="nome"
                    value={formik.values.nome}
                    onChange={formik.handleChange}
                />
                <TextField
                    className="inputValor"
                    id="outlined-divida"
                    variant="outlined"
                    placeholder="Divida"
                    type="number"
                    name="divida"
                    value={formik.values.divida}
                    onChange={formik.handleChange}
                />
                <Button
                    className="enviarDevedor"
                    variant="contained"
                    color="primary"
                    type="submit"
                >Enviar
                </Button>
            </form>
        </>
    )
};
