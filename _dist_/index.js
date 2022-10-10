
const baseUrl = 'https://platzi-avo.vercel.app';
const url = `${baseUrl}/api/avo`;
const appNode = document.querySelector('#app')

// Intl
// 1 - format fechas
// 2 - format monedas
const formatPrice = (price) => {
  const newPrice = new window.Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: 'USD'
  }).format(price)

  return newPrice
}

// web api
// Conectarnos al server
// procesar la respuesta y convertirla en JSON
// JSON -> Data - Renderizar info brwoser
// promise -> async/await
async function fetchData() {
  const response = await window.fetch(url)
  const responseJson = await response.json();

  console.log(responseJson);

  const allItems = []

  responseJson.data.forEach(item => {
    console.log(item.name);
    // crear image
    const image = document.createElement('img')
    image.className = 'h-36 w-36 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6'
    image.src = `${baseUrl}${item.image}`
    // crear titulo
    const title = document.createElement('h2')
    title.textContent = `${item.name}`
    title.className = 'text-2xl'

    // crear precio
    const price = document.createElement('div')
    price.className = 'text-xl text-gray-600'
    price.textContent = formatPrice(item.price)

    // Wrap
    const titleAndPrice = document.createElement('div')
    titleAndPrice.append(title, price)

    const container = document.createElement('div')
    container.className = 'md:flex cursor-pointer p-6 rounded-lg bg-gray-900 hover:bg-gray-400'
    container.append(image, titleAndPrice)

    allItems.push(container)
  })

  appNode.append(...allItems)
}

fetchData();
