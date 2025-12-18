export function createFooter() {
  const footer = document.createElement('footer')
  footer.className = 'footer'

  // cria a div de fundo onde a imagem do footer será aplicada
  const bg = document.createElement('div')
  bg.className = 'footer-bg'
  footer.appendChild(bg)

  // cria o container que posiciona o conteúdo do footer
  const container = document.createElement('div')
  container.className = 'footer-container'

  // cria e popula o elemento de copyright
  const copyright = document.createElement('span')
  copyright.className = 'copyright'
  copyright.textContent = '© 2017 THE GREAT OUTDOORS. All rights reserved.'

  // cria um separador visual (barra) entre copyright e navegação
  const separator = document.createElement('span')
  separator.className = 'separator'
  separator.textContent = '|'
  separator.style.margin = '0 15px' // pequena margem entre itens

  // cria a nav e adiciona os links do footer
  const nav = document.createElement('nav')
  nav.className = 'footer-nav'

  const links = ['ABOUT', 'EXPLORE', 'JOURNAL', 'SEARCH']
  links.forEach(text => {
    const a = document.createElement('a')
    a.textContent = text
    nav.appendChild(a)
  })

  // anexa os elementos ao container na ordem desejada
  container.appendChild(copyright)
  container.appendChild(separator)
  container.appendChild(nav)

  footer.appendChild(container)
  return footer
}