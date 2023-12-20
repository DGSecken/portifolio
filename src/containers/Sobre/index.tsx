import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia officia
      consequatur perspiciatis doloremque, nihil dicta laudantium illo. At
      recusandae quae fugiat ratione odio sed quia, laboriosam, dolorem culpa
      earum nemo?
    </Paragrafo>
    <GithubSecao>
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api?username=DGSecken&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
      />
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=DGSecken&layout=compact&langs_count=7&theme=dracula"
      />
    </GithubSecao>
  </section>
)

export default Sobre
