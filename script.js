// importa componente que monta a estrutura inteira da página
import { createPage } from './components/Page.js'

// cria o elemento da página com todos os componentes
const page = createPage()

// adiciona a página montada ao corpo do html
document.querySelector('body').appendChild(page)
