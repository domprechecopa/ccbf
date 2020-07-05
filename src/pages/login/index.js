import React, {useState} from 'react';
import {Container, LogoImagem, LoginInput, ViewButaoEntrada,
    CreateConta, ButaoTextCreateConta, EntrarConta, ButaoTextEntrarConta,
    EsqueceuSenha, TextEsqueceuSenha } from './components';
import Logo from '../../assets/logo-on-page.png';

export default function Login(){
    const [cpf, setCPF] = useState('');
    const [senha, setSenha] = useState('senha');

    return(
        <Container>
            <LogoImagem source={Logo} />
            <LoginInput placeholder="CPF" clearTextOnFocus={true} 
            onChangeText={(text) => setCPF(text)} clearTextOnvalue={cpf}
             placeholderTextColor="#B7B7B7" keyboardType='number-pad'></LoginInput>
            <LoginInput placeholder="Senha" placeholderTextColor="#B7B7B7" style={{marginTop: 12}}
              secureTextEntry={true} textContentType="password" ></LoginInput>
            
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