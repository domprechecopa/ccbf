import React, {useState} from 'react';
import {TouchableOpacity, Image, View} from 'react-native';
import {ContainerMain, HeaderContainer, TextHeader,
    ImageUser, DataUserFormContainer,  TextTitleCamp,
    InputTextOneColumn, TwoCampView, SmallCampInput,
    ContinuarButton, ViewButtonContinuar, ButaoTextContinuar
} from './components';
import ArrowLeftImg from '../../assets/mdi_chevron_left.png';
import TemplateUserImg from '../../assets/mdi_account_circle.png';
import ArrowRightImg from '../../assets/mdi_chevron_right.png';

import {useNavigation} from '@react-navigation/native';
export default function RegisterPage(){
    const navigation = useNavigation();
    return(
        <ContainerMain>
            <HeaderContainer>
                <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                    <Image source={ArrowLeftImg}/>
                </TouchableOpacity>
                <TextHeader>Criar conta</TextHeader>
            </HeaderContainer>
            <ImageUser source={TemplateUserImg}/>
            <DataUserFormContainer>
                <TextTitleCamp>Nome:</TextTitleCamp>
                <InputTextOneColumn/>
                <TextTitleCamp>Sobrenome:</TextTitleCamp>
                <InputTextOneColumn/>
                <TwoCampView>
                    <View>
                        <TextTitleCamp>CEP:</TextTitleCamp>
                        <SmallCampInput placeholder="00000-00" placeholderTextColor="#B7B7B7"/>
                    </View>
                    <View>
                        <TextTitleCamp>Bairro:</TextTitleCamp>
                        <SmallCampInput/>
                    </View>
                </TwoCampView>

                <TextTitleCamp>Rua:</TextTitleCamp>
                <InputTextOneColumn/>
                <TwoCampView>
                    <View>
                        <TextTitleCamp>Complemento:</TextTitleCamp>
                        <SmallCampInput/>
                    </View>
                    <View>
                        <TextTitleCamp>Número:</TextTitleCamp>
                        <SmallCampInput/>
                    </View>
                </TwoCampView>

                <TwoCampView>
                    <View>
                        <TextTitleCamp>Cidade:</TextTitleCamp>
                        <SmallCampInput/>
                    </View>
                    <View>
                        <TextTitleCamp>Telefone:</TextTitleCamp>
                        <SmallCampInput  placeholder="(__)_______-___" placeholderTextColor="#B7B7B7"/>
                    </View>
                </TwoCampView>
                <TextTitleCamp>CPF:</TextTitleCamp>
                <InputTextOneColumn placeholder="000.000.000-00" placeholderTextColor="#B7B7B7"/>
            </DataUserFormContainer>
            <ViewButtonContinuar>
                <ContinuarButton><ButaoTextContinuar>Continuar</ButaoTextContinuar>
                <Image source={ArrowRightImg} style={{marginLeft: 5}}/>
                </ContinuarButton>


            </ViewButtonContinuar>

        </ContainerMain>

    );

}