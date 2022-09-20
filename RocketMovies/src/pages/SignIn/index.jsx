import { Container } from './styles';

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Textarea  } from '../../components/Textarea'

import { FiMail } from "react-icons/fi";

export function SignIn(){
  return(
    <Container>
      <Textarea  placeholder="Observações" />
    </Container>
  )
}