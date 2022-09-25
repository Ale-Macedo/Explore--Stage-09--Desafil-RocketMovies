import { Container } from './styles';

import { FiStar } from "react-icons/fi";
import { Tag } from '../Tag'

export function Note({ data, ...rest}){
  return(
    <Container {...rest}>
        
          <h1>{data.title}</h1>
          <h2>
          <FiStar className='active' />
          <FiStar className='active' /> 
          <FiStar className='active' /> 
          <FiStar className='active' /> 
          <FiStar className='' />
          </h2>
        
       
      <p>{ data.description }</p>

      {
        data.tags && <footer>
          {
            data.tags.map(tag => 
            <Tag key={tag.id} title={tag.name}/> )
          }
        </footer>
      }
    </Container>
  )
}