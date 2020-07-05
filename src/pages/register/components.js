import styled from 'styled-components/native';

export const ContainerMain = styled.View`
    flex: auto;
    align-items: center;
    background-color: #ffffff;
`;

export const HeaderContainer = styled.View`
    flex-direction: row;
    margin-top: 45px;
    margin-left: 17px;
    margin-right: auto;
    align-items: center;
`;

export const TextHeader = styled.Text`
    margin-left: 17px;
    font-size: 20px;
    line-height: 23px;
    color: #7C7C7C;
`;

export const ImageUser = styled.Image`
    margin-top: 17px;
`;

export const DataUserFormContainer = styled.View`
    margin-top: 30px;
    justify-content:center;
`;

export const TextTitleCamp = styled.Text`
    margin-top: 7px;

    font-size: 18px;
    color: #7C7C7C;
    line-height: 21px;

`;

export const InputTextOneColumn = styled.TextInput`
    width:345px;
    height:35px;
    background-color: #F2F2F2;
    border-radius: 250px;
    border: 1px solid #c2c2c2;
    padding-left: 18px;
`;

export const TwoCampView = styled.View`
    justify-content: space-between;
    flex-direction: row;
`;

export const SmallCampInput = styled.TextInput`
    width:160px;
    height:35px;
    background-color: #F2F2F2;
    border-radius: 250px;
    border: 1px solid #c2c2c2;
    padding-left: 18px
`;

export const ViewButtonContinuar = styled.View`
    margin: auto 37px 64px auto;
`;

export const ContinuarButton = styled.TouchableOpacity`
    margin: 2px;
    margin-top: 50px;
    width: 130px;
    height: 35px;
    background-color: #B5D9F8;
    border-radius: 25px;
    align-items: center;
    justify-content: center;
    border-style: solid;
    border-width: 1px;
    border-color: #2F80ED;
    flex-direction: row;

`;


export const ButaoTextContinuar= styled.Text`
    font-size: 20px;
    color: #2F80ED;
`;