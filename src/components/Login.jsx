import React, { useEffect, useState } from 'react';
import styled, { StyleSheetManager, createGlobalStyle } from 'styled-components';

export default function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [autentication, setAutentication] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData?.username == "hans"
            && formData?.password == '123') {
            setAutentication(true);
        } else {
            setAutentication(false);
        }
    };

    return (
        <StyleSheetManager>
            <GlobalStyles />
            <LoginContainer>
                <h1>Bussiness Code</h1>
                <br />
                <LoginForm onSubmit={handleSubmit}>
                    <label>
                        Usuario:
                        <InputField
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Contraseña:
                        <InputField
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <SubmitButton type="submit">Iniciar Sesión</SubmitButton>
                </LoginForm>
            </LoginContainer>
        </StyleSheetManager>
    );
}

// Estilos globales para toda la aplicación
const GlobalStyles = createGlobalStyle`
  body {
    background-color: #333;
    color: #fff;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }
`;

// Estilos para el componente Login
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LoginForm = styled.form`
  width: 300px;
`;

const InputField = styled.input`
  margin: 5px 0;
  padding: 8px;
  width: 100%;
`;

const SubmitButton = styled.button`
  margin: 5px 0;
  padding: 8px;
  width: 100%;
  background-color: #4caf50;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;