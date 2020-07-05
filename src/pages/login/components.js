import styled from 'styled-components/native';

export const Container = styled.View`

    flex: auto;
    margin-top: 10px;
    align-items:center;
    background-color: #ffffff;
    
`;

export const LogoImagem = styled.Image`
    margin-top: 180px;
`;

export const LoginInput = styled.TextInput`
    margin-top: 64px;
    border-radius: 25px;
    background-color: #E0E0E0;
    border-style: solid;
    border-width: 1px;
    border-color: #C2C2C2;
    width: 250px;
    height: 32px;
    text-align: center;
`;

export const ViewButaoEntrada = styled.View`
    margin-top: 50px;
    flex-direction: row;
`;

export const CreateConta = styled.TouchableOpacity`
    margin: 2px;
    width: 122px;
    height: 32px;
    background-color: #E0E0E0;
    border-radius: 25px;
    align-items: center;
    justify-content: center;
    border-style: solid;
    border-width: 1px;
    border-color: #828282;

`;

export const EntrarConta = styled.TouchableOpacity`
    margin: 2px;

    width: 122px;
    height: 32px;
    background-color: #B5D9F8;
    border-radius: 25px;
    align-items: center;
    justify-content: center;
    border-style: solid;
    border-width: 1px;
    border-color: #2F80ED;

`;

export const ButaoTextCreateConta = styled.Text`
    font-size: 20px;
    color: #828282;
`;


export const ButaoTextEntrarConta = styled.Text`
    font-size: 20px;
    color: #2F80ED;
`;

export const EsqueceuSenha = styled.TouchableOpacity`
    margin-top: 50px;
`;

export const TextEsqueceuSenha = styled.Text`
    text-decoration-line: underline;
    font-size: 14px;
    color: #828282;
`;