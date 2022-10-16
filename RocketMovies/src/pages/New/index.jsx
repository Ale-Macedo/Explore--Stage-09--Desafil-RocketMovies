import { Container, Form } from './styles';

import { Link } from 'react-router-dom';

import { FiArrowLeft } from "react-icons/fi";

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Button } from '../../components/Button'
export function New(){
  return(
    <Container>
      <Header/>
      <main>
        <header>
          <Link to="/"> <FiArrowLeft/> Voltar </Link>
          <h1>Novo Filme</h1>
        </header>
        
        <Form>
          <div className='row'>
            <Input 
            placeholder="Titulo"
            type="text"
            />
            <Input 
            placeholder="Sua nota (de 0 a 5)"
            type="text"
            /> 
          </div>
          
          <Textarea
          placeholder="Observações"
          /> 
          <div className='section'>
            <h2>Marcadores</h2>
            <div className='tags'>
              <NoteItem value="Horror"/>
              <NoteItem isNew placeholder="Novo marcador"/>
            </div>
          </div>
          
          
          <div className='row'>
            <Button title="Excluit filme"/>      
            <Button title="Salvar alterações"/>
          </div>

        </Form>
      </main>
    </Container>
  )
}