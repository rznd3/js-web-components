// lista com notícias que vão aparecer no journal
const noticias = [
  {
    date: 'MAY 30, 2017',
    title: 'An Unforgettable',
    description: 'If you only have one day to visit Yosemite National Park and you want to make the most out of it.',
    image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    date: 'MAY 28, 2017',
    title: 'Symphonies in Steel',
    description: 'Crossing the Golden Gate Bridge from San Francisco, you arrive in Marin even before landing on solid ground.',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=800&auto=format&fit=crop'
  }
]

// cria um único card de notícia com imagem, data, título e descrição
function criarCardNoticia(date, title, description, imageUrl) {
  // elemento principal do card
  const card = document.createElement('div')
  card.className = 'card journal-card'

  // cria div para imagem de fundo
  const imgDiv = document.createElement('div')
  imgDiv.className = 'image'
  imgDiv.style.backgroundImage = `url('${imageUrl}')`
  
  card.appendChild(imgDiv)

  // cria seção com informações da notícia
  const meta = document.createElement('div')
  meta.className = 'meta'
  
  meta.innerHTML = `
    <span class="date">${date}</span>
    <h3>${title}</h3>
    <p>${description}</p>
  `
  
  card.appendChild(meta)
  return card
}

// cria seção inteira do journal com todas as notícias
export function createJournal() {
  // elemento principal da seção
  const section = document.createElement('section')
  section.className = 'journal section-padding'

  // cria cabeçalho com título e descrição
  const header = document.createElement('div')
  header.className = 'section-header'
  header.innerHTML = `
    <h2>The Journal</h2>
    <p>Our favorite stories about public lands and opportunities for you to get involved.</p>
  `
  section.appendChild(header)

  // cria grid para organizar os cards
  const container = document.createElement('div')
  container.className = 'cards-grid'

  // cria um card para cada notícia
  noticias.forEach(n => {
    container.appendChild(criarCardNoticia(n.date, n.title, n.description, n.image))
  })

  section.appendChild(container)
  return section
}