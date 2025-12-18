// cria a barra de navegação do topo da página
export function createNavbar() {
  // elemento principal da navegação
  const nav = document.createElement('nav')
  nav.className = 'navbar'
  
  // cria grupo de links esquerdo
  const linksLeft = document.createElement('ul')
  linksLeft.className = 'nav-links nav-left'
  const leftItems = ['ABOUT', 'EXPLORE']
  leftItems.forEach(texto => {
    const li = document.createElement('li')
    li.textContent = texto
    linksLeft.appendChild(li)
  })
  
  // cria logo no centro
  const logo = document.createElement('div')
  logo.className = 'logo'
  logo.textContent = '📍'
  
  // cria grupo de links direito
  const linksRight = document.createElement('ul')
  linksRight.className = 'nav-links nav-right'
  const rightItems = ['JOURNAL', 'SEARCH']
  rightItems.forEach(texto => {
    const li = document.createElement('li')
    li.textContent = texto
    linksRight.appendChild(li)
  })

  // monta a barra: links esquerda, logo, links direita
  nav.appendChild(linksLeft)
  nav.appendChild(logo)
  nav.appendChild(linksRight)
  
  return nav
}