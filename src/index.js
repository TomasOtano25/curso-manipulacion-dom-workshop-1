
const url = 'https://platzi-avo.vercel.app/api/avo';

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
    // crear titulo
    const title = document.createElement('h2')
    // crear precio
    const price = document.createElement('div')

    const container = document.createElement('div')
    container.append(image, title, price)

    allItems.push(container)
  })

  document.body.append(...allItems)
}

fetchData();
