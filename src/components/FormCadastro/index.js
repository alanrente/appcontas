import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';

export const FormCadastro = () => {

    const [formValues, setFormValues] = useState({
        nome: '',
        divida: ''
    })
    const [devedores, setDevedores] = useState([])

    function handleChange(event) {
        const { name, value } = event.target
        const newValue = {
            ...formValues,
            [name]: value
        }
        setFormValues(newValue)
    }

    function handleSendForm(event) {
        event.preventDefault()
        setDevedores([formValues])
        console.log(devedores)
    }

    return (
        <form onSubmit={handleSendForm} className="formCadastroDevedores">
            <TextField
                className="inputNome"
                id="outlined-search"
                variant="outlined"
                placeholder="Nome"
                type="text"
                name="nome"
                value={formValues.nome}
                onChange={handleChange}
            />
            <TextField
                className="inputValor"
                id="outlined-divida"
                variant="outlined"
                placeholder="Divida"
                type="number"
                name="divida"
                value={formValues.divida}
                onChange={handleChange}
            />
            <Button
                className="enviarDevedor"
                variant="contained"
                color="primary"
                type="submit"
            >Enviar
            </Button>
        </form>
    )
};
