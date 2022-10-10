
const baseUrl = 'https://platzi-avo.vercel.app';
const url = `${baseUrl}/api/avo`;
const appNode = document.querySelector('#app')

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
    image.src = `${baseUrl}${item.image}`
    // crear titulo
    const title = document.createElement('h2')
    title.textContent = `${item.name}`
    // crear precio
    const price = document.createElement('div')
    price.textContent = `$${item.price}`

    const container = document.createElement('div')
    container.append(image, title, price)

    allItems.push(container)
  })

  appNode.append(...allItems)
}

fetchData();
