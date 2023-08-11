const domainSelector = document.getElementById('domainSelector')
const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/'
/*const targetUrl =
  'https://secure.disoft-tech.com/Disoft_RestFul_Api/resources/tayba_test/IntCrossingLightAll'

fetch(
  `https://api.allorigins.win/raw?url=https://secure.disoft-tech.com/Disoft_RestFul_Api/resources/tayba_test/IntCrossingLightAll`
)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json()
  })
  .then((data) => {
    console.log(data)
    console.log(data.INTLISTCROSSINGLIGHTALL)
    data.INTLISTCROSSINGLIGHTALL.forEach((domain) => {
      console.log(domain)
      const option = document.createElement('option')
      option.value = domain.DB_CROSSING_NAME
      option.text = domain.DB_CROSSING_NAME
      domainSelector.appendChild(option)
    })
  })
  .catch((error) => {
    console.error('Fetch error:', error)
  })*/
function handleJSONPResponse(data) {
  console.log('here')
  console.log(data)
}
const remoteUrl =
  'https://secure.disoft-tech.com/Disoft_RestFul_Api/resources/tayba_test/IntCrossingLightAll'
const callbackName = 'handleJSONPResponse'

const script = document.createElement('script')
script.src = `${remoteUrl}?callback=${callbackName}`
document.head.appendChild(script)
