import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button }  from '../Button';
import logo from  '../../assets/logo-dio.png';

import { BuscarInputContainer,
         Container,
         Menu,
         MenuRight,
         Row,         
         Wrapper
 } from './styles';

const Header = () => {

    const navigateLogin =  useNavigate;
    const navigateCadastro =  useNavigate;

    const goToCadastro = (navigate) => {
        navigate('/cadastro');
    }

    const goToLogin = (navigate) => {
        navigate('/login');
    } 

    return(
        <Wrapper>
            <Container>
                <Row>                    
                    <img src={logo} alt="logo da DIO"/>
                    <BuscarInputContainer>                       
                       <input placeHolder='Buscar ...'></input>
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </Row>
                <Row>
                    <MenuRight href="/home"> Home </MenuRight>
                    <Button title="Entrar"  onClick={() => goToLogin(navigateLogin)}/>
                    <Button title="Cadastrar" onClick={() => goToCadastro(navigateCadastro)}/>
               </Row> 
            </Container>
        </Wrapper>
    )
}

export { Header }