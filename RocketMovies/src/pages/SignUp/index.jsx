import { Container, Form, Background } from './styles';

import { Link } from 'react-router-dom';

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";

export function SignUp(){
  return(
    <Container>

      <Background/>

      <Form >
      <h1>RocketMovies</h1>
      <p>Aplicação para acompanhar tudo que assistir.</p>
      

      <h2>Faça seu login</h2>

      <Input 
        placeholder="Nome"
        type="text"
        icon={FiUser}
      />

      <Input 
        placeholder="E-mail" 
        type="text"
        icon={FiMail}
      />

      <Input 
        placeholder="Senha"
        type="password"
        icon={FiLock}
      />

      <Button title='Entrar'/>

      <Link to="/"> <FiArrowLeft/> Voltar para o login</Link>
      </Form>
        
    </Container>
  )
}

// data={
//         {
//           title: 'video do vinicinhos 13',
//           description:'carai acabei de ver um video do vinicinhos 13 e malucoooooo ele fez um iron golem giga gigante mt loco... mas tedioso entao nota 2',
//           tags:[
//                 {id: '1', name: 'red stone'},
//                 {id: '2', name: 'locura'}
//                ]

//         }
//       }/>