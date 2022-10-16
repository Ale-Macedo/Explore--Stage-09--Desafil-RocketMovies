import { Container, Content } from './styles';

import { Link } from 'react-router-dom';

import { Header } from '../../components/Header'
import { Note } from '../../components/Note'

import { FiPlus } from "react-icons/fi";

export function Home(){
  return(
    <Container>
      <Header/>
      <main>
        <header>
          <h1>Meus filmes</h1>
          <Link to="/new"> <FiPlus/> Adicionar filme</Link>
        </header>
        <Content>
        <Note
        data={
          {
            title: 'video do vinicinhos 13',

            description:'carai acabei de ver um video do vinicinhos 13 e malucoooooo ele fez um iron golem giga gigante mt loco... mas tedioso entao nota 2',

            tags:[
                  {id: '1', name: 'red stone'},
                  {id: '2', name: 'locura'}
                 ]
  
          }
        }/>
        <Note
        data={
          {
            title: 'video do vinicinhos 13',

            description:'carai acabei de ver um video do vinicinhos 13 e malucoooooo ele fez um iron golem giga gigante mt loco... mas tedioso entao nota 2',

            tags:[
                  {id: '1', name: 'red stone'},
                  {id: '2', name: 'locura'}
                 ]
  
          }
        }/>
        <Note
        data={
          {
            title: 'video do vinicinhos 13',

            description:'carai acabei de ver um video do vinicinhos 13 e malucoooooo ele fez um iron golem giga gigante mt loco... mas tedioso entao nota 2',

            tags:[
                  {id: '1', name: 'red stone'},
                  {id: '2', name: 'locura'}
                 ]
  
          }
        }/>
        <Note
        data={
          {
            title: 'video do vinicinhos 13',

            description:'carai acabei de ver um video do vinicinhos 13 e malucoooooo ele fez um iron golem giga gigante mt loco... mas tedioso entao nota 2',

            tags:[
                  {id: '1', name: 'red stone'},
                  {id: '2', name: 'locura'}
                 ]
  
          }
        }/>
        
        </Content>
        
        
      </main>
      

    </Container>
  )
}