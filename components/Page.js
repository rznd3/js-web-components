// importa cada componente que será renderizado na página
import { createNavbar } from './Navbar.js'
import { createOutdoor } from './Outdoor.js'
import { createExplore } from './Explore.js'
import { createJournal } from './Journal.js'
import { createFooter } from './Footer.js'

// monta a página completa juntando todos os componentes
export function createPage() {
  // cria elemento principal que vai abrigar tudo
  const page = document.createElement('div')

  // adiciona barra de navegação
  page.appendChild(createNavbar())
  // adiciona seção destaque com título
  page.appendChild(createOutdoor())
  // adiciona seção de pontos turísticos
  page.appendChild(createExplore())
  // adiciona seção de notícias
  page.appendChild(createJournal())
  // adiciona rodapé
  page.appendChild(createFooter())

  return page
}
