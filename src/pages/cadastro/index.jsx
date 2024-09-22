
import { useForm } from "react-hook-form";

import {Title, Container, Column, SubtitleCadastro, Row, Login} from './styles';

import { Header } from '../../components/Header';

import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { api } from '../../services/api';


const Cadastro = ()=>{

    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try{
            const {data} = await api.get(`/users?email=${formData.email}&senha=${formData.senha}`);
            
            if(data.length && data[0].id){
                navigate('/feed') 
                return
            }

            alert('Usuário ou senha inválido')
        }catch(e){
            //TODO: HOUVE UM ERRO
        }
    };


      return (<>
        <Header />
        <Container>
            <Column>
               <Title> 
                  A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
               </Title>
            </Column>
            <Column>
               <Title> Comece agora grátis</Title>
               <SubtitleCadastro>Crie sua conta e make teh change._</SubtitleCadastro>
               <form onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                    {errors.email && <span>E-mail é obrigatório</span>}
                    <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />
                    {errors.senha && <span>Senha é obrigatório</span>}
                    <Button title="Criar Minha Conta" variant="secondary" type="submit"/>
                </form>
                <Row>                    
                    <SubtitleCadastro>Ao clicar em "criar minha conta", declaro que aceito as Políticas de Privacidade e os termos de Uso da DIO</SubtitleCadastro>                    
                    <SubtitleCadastro>já tenho conta. <Login href="/login">Fazer login</Login></SubtitleCadastro>
                </Row>
            </Column>
        </Container>

      </>);
}

export { Cadastro }