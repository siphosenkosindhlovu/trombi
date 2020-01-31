/* eslint-disable space-before-function-paren */
import Fuse from 'fuse.js'
import { buildCard } from './CardMain'
import { createElement } from './utilities'
import { URL, nav, container, searchForm, searchInput } from './constants'

function getData(url) {
  return fetch(url).then(res => {
    return (res.json())
  })
}

window.addEventListener('load', function (e) {
  getData(URL).then(buildElements)
})

nav.addEventListener('click', function (e) {
  if (e.target.classList.contains('nav_item')) {
    document.querySelectorAll('.nav_item').forEach(function (item) {
      item.classList.remove('active')
    })
    e.target.classList.add('active')
    resetContainer(container)
    getData(URL).then(function (data) {
      console.log(data)
      var filtered = data.filter(function (item) {
        return item.status.toLowerCase() === e.target.id.toLowerCase()
      })
      buildElements(filtered)
    })
  }
})

let searchQuery = ''

function search(query, list) {
  const options = {
    threshold: 0.3,
    keys: [
      'name', 'company', 'status', 'email', 'telephone'
    ]
  }
  const fuse = new Fuse(list, options)

  return fuse.search(query)
}

searchForm.addEventListener('submit', function (e) {
  e.preventDefault()
  alert('Ping!')
})
searchInput.addEventListener('keyup', function (e) {
  if (e.target.value === searchQuery) console.log(e.target.value)
  searchQuery = e.target.value
  getData(URL).then(function (data) {
    buildElements(search(e.target.value, data))
  })
})

function resetContainer(container) {
  $(container).empty()
}

/**
 *
 * A function that renders user data to the page
 *
 * @param {objects[]} data - an array of objects to be rendered to the page
 */
function buildElements(data) {
  // console.log(CardSidePane(data[2]))
  // console.log(CardBottomPane(data[2]))
  console.log(data)
  resetContainer(container)
  data.forEach(function (person) {
    container.appendChild(buildCard(person))
  })
}

window.createElement = createElement
window.buildCard = buildCard
