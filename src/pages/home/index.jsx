import  banner from '../../assets/banner.png'

import { Link } from "react-router-dom";
import { Header } from '../../components/Header';
import { Button } from "../../components/Button";

import { Container, TextContent, Title, TitleHighlight } from './styles';


const Home = () =>{
    return (<>
       <Header />
       
       <Container>
          <div>
            <Title> 
              <TitleHighlight>
                   Implemente <br />
              </TitleHighlight>
              o seu futuro global agora!
             </Title>

             <TextContent>
               Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
               desafio profissional, evoluindo em comunidade com os melhores experts. 
             </TextContent>
             <Button  title="Começar agora" variant="secondary" onClick={()=> null}/>
          </div>
          <div>
            <img src={banner} alt="Banner principal" />
          </div>
       </Container>   
    </>
    )
}

export { Home }