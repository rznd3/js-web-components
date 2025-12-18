// cria seção de destaque (hero) com título principal
export function createOutdoor() {
  // elemento principal da seção destaque
  const section = document.createElement('section')
  section.className = 'hero outdoor'

  // container para conteúdo de texto
  const content = document.createElement('div')
  content.className = 'hero-content'

  // título principal
  const h2 = document.createElement('h2')
  h2.textContent = 'The Great Outdoors'
  
  // subtítulo
  const p = document.createElement('p')
  p.textContent = 'Wander often, Wonder always.'

  // adiciona textos ao container
  content.appendChild(h2)
  content.appendChild(p)
  // adiciona container à seção
  section.appendChild(content)

  return section
}