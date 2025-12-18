// lista com pontos turísticos que vão aparecer na página
const locais = [
  { 
    city: 'Nærøyfjorden', 
    country: 'NORWAY', 
    image: 'https://plus.unsplash.com/premium_photo-1668017178979-9e341bfaa464?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
  },
  { 
    city: 'Antelope Canyon', 
    country: 'UNITED STATES', 
    image: 'https://images.unsplash.com/photo-1505521377774-103a8cc2f735?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
  },
  { 
    city: 'Grossglockner', 
    country: 'AUSTRIA', 
    image: 'https://images.unsplash.com/photo-1609843497514-768fba87b782?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
  },
]

// cria um único card de ponto turístico com imagem, cidade e país
function criarCardPonto(city, country, imageUrl) {
  // elemento principal do card
  const card = document.createElement('div')
  card.className = 'card place-card'

  // cria div para imagem de fundo
  const imgDiv = document.createElement('div')
  imgDiv.className = 'image'
  imgDiv.style.backgroundImage = `url('${imageUrl}')`
  
  card.appendChild(imgDiv)

  // cria seção com texto (cidade e país)
  const meta = document.createElement('div')
  meta.className = 'meta'
  meta.innerHTML = `<h3>${city}</h3><span>${country}</span>`
  
  card.appendChild(meta)
  return card
}

// cria seção inteira de exploração com todos os cards
export function createExplore() {
  // elemento principal da seção
  const section = document.createElement('section')
  section.className = 'explore section-padding'

  // cria cabeçalho com título e descrição
  const header = document.createElement('div')
  header.className = 'section-header'
  header.innerHTML = `
    <h2>Explore the World</h2>
    <p>We seek to provide the most authentic experiences for explorers and travelers around the world.</p>
  `
  section.appendChild(header)

  // cria grid para organizar os cards
  const grid = document.createElement('div')
  grid.className = 'cards-grid'

  // cria um card para cada ponto turístico
  locais.forEach(loc => {
    grid.appendChild(criarCardPonto(loc.city, loc.country, loc.image))
  })

  section.appendChild(grid)
  return section
}