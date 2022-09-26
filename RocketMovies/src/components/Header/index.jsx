import { Container, Profile } from './styles';

import { Input } from '../Input';

export function Header({ title, ...rest }){
  return(
    <Container>
      
      <h1>RocketMovies</h1>

      <Input
      type="text"
      placeholder="Pesquisar pelo título"
      />
       
      <Profile to='/profile'>
        
        
      <div>
        <strong>Alessandro Macedo</strong>
        <a href="#">sair</a>
      </div>  
     
      <img src="https://github.com/Ale-Macedo.png" alt="Foto do usuário" />
     
      </Profile>
    </Container>
  )
}