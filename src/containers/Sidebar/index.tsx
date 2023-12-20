import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { BotaoTema, Descricao } from './styles'

const Sidebar = () => (
  <aside>
    <Avatar></Avatar>
    <Titulo fontSize={20}>Diogo Sela</Titulo>
    <Paragrafo tipo="secundario" fontSize={16}>
      DGSecken
    </Paragrafo>
    <Descricao tipo="principal" fontSize={12}>
      Engenheiro front-end
    </Descricao>
    <BotaoTema>Trocar Tema</BotaoTema>
  </aside>
)

export default Sidebar
