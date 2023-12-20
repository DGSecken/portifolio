import Titulo from '../Titulo'
import Projeto from '../Projeto'

import { Lista } from './styles'

const Projetos = () => (
  <section>
    <Titulo fontSize={16}>Projetos</Titulo>
    <Lista>
      <li>
        <Projeto />
      </li>
    </Lista>
  </section>
)

export default Projetos
