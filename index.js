addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

const linksData = {
  links: [
    { name: 'A sample URL', url: 'https://asampleurl.com' },
    { name: 'Another sample URL', url: 'https://anothersampleurl.com' },
    {
      name: 'Yet another sample URL',
      url: 'https://yetanothersampleurl.com',
    },
    { name: 'A final sample URL', url: 'https://afinalsampleurl.com' },
  ],
}

const body = JSON.stringify(linksData, null, 2)

async function handleRequest(request) {
  return new Response(body, {
    headers: { 'content-type': 'application/json;charset=UTF-8' },
  })
}
