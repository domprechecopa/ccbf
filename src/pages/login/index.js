import React from 'react';
import {Container, LogoImagem, LoginInput, ViewButaoEntrada,
    CreateConta, ButaoTextCreateConta, EntrarConta, ButaoTextEntrarConta,
    EsqueceuSenha, TextEsqueceuSenha } from './components';
import Logo from '../../assets/logo-on-page.png';

export default function Login(){
    return(
        <Container>
            <LogoImagem source={Logo} />
            <LoginInput placeholder="CPF" placeholderTextColor="#B7B7B7"></LoginInput>
            <LoginInput placeholder="Senha" placeholderTextColor="#B7B7B7" style={{marginTop: 12}}></LoginInput>
            
            <ViewButaoEntrada>
                <CreateConta><ButaoTextCreateConta>Criar conta</ButaoTextCreateConta></CreateConta>
                <EntrarConta><ButaoTextEntrarConta>Entrar</ButaoTextEntrarConta></EntrarConta>
            </ViewButaoEntrada>

            <EsqueceuSenha>
                <TextEsqueceuSenha>Esqueci a senha</TextEsqueceuSenha>
            </EsqueceuSenha>

        </Container>
    );
}