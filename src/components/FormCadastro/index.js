import { Button, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

export const FormCadastro = () => {

    const [devedor, setDevedor] = useState({
        nome: '',
        divida: ''
    })
    const [devedores, setDevedores] = useState([])
    
    useEffect(() => {
        console.log(devedores)
    }, [devedores]);

    function handleChange(event) {
        const { name, value } = event.target
        const newValue = {
            ...devedor,
            [name]: value
        }

        // verifica se o campo 'divida' é texto
        const campo = [name][0]
        const ehTexto = isNaN(value)
        if (campo === 'divida' && ehTexto) return

        setDevedor(newValue)
    }

    function handleSendForm(event) {
        event.preventDefault()
        setDevedores([...devedores, devedor])
    }

    return (
        <form className="formCadastroDevedores">
            <TextField
                className="inputNome"
                id="outlined-search"
                variant="outlined"
                placeholder="Nome"
                type="text"
                name="nome"
                value={devedor.nome}
                onChange={handleChange}
            />
            <TextField
                className="inputValor"
                id="outlined-divida"
                variant="outlined"
                placeholder="Divida"
                type="number"
                name="divida"
                value={devedor.divida}
                onChange={handleChange}
            />
            <Button
                className="enviarDevedor"
                variant="contained"
                color="primary"
                type="submit"
                onClick={handleSendForm}
            >Enviar
            </Button>
        </form>
    )
};
