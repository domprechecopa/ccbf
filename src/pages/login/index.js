import React, {useState} from 'react';
import {Container, LogoImagem, LoginInput, ViewButaoEntrada,
    CreateConta, ButaoTextCreateConta, EntrarConta, ButaoTextEntrarConta,
    EsqueceuSenha, TextEsqueceuSenha } from './components';
import Logo from '../../assets/logo-on-page.png';
import {useNavigation} from '@react-navigation/native';

export default function LoginPage(){
    const [cpf, setCPF] = useState('');
    const [senha, setSenha] = useState('');

    const navigation = useNavigation();

    return(
        <Container>
            <LogoImagem source={Logo} />
            <LoginInput placeholder="CPF" clearTextOnFocus={true} 
            onChangeText={(text) => setCPF(text)} clearTextOnvalue={cpf}
             placeholderTextColor="#B7B7B7" keyboardType='number-pad'></LoginInput>
            <LoginInput placeholder="Senha" placeholderTextColor="#B7B7B7" style={{marginTop: 12}}
              secureTextEntry={true} textContentType="password"  onChangeText={(text) => setSenha(text)}></LoginInput>
            <ViewButaoEntrada>
                <CreateConta onPress={()=>navigation.navigate('Register')}><ButaoTextCreateConta>Criar conta</ButaoTextCreateConta></CreateConta>
                <EntrarConta><ButaoTextEntrarConta>Entrar</ButaoTextEntrarConta></EntrarConta>
            </ViewButaoEntrada>

            <EsqueceuSenha>
                <TextEsqueceuSenha>Esqueci a senha</TextEsqueceuSenha>
            </EsqueceuSenha>

        </Container>
    );
}