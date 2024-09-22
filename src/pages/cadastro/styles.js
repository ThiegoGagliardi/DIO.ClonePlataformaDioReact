import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;     
`

export const Column = styled.div`
    flex: 1;
    padding:  0 80px;
`

export const Title = styled.h2`
    
    color: #FFFFFF;
    font-family: 'Open Sans';
`

export const SubtitleCadastro = styled.p`
    
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 20px;
    margin-top : 10px;
    width  : 100%;
    max-width: 80%;    
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;    
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    flex-wrap: wrap;
`

export const Login = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #33ff51;
    margin-right: 12px;
`