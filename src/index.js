/* eslint-disable space-before-function-paren */
import Fuse from 'fuse.js'
import { buildCard } from './CardMain'
import { createElement } from './utilities'
import { URL, nav, container, searchForm, searchInput } from './constants'
import { data } from './data.js'
import './sass/style.scss'

/**
 * This function is used to fetch data.
 * @param {string} url - the url of the source data,
 * @return {json} - it should always return data in json format in the schema described in the README.
 *
 */

function getData(url) {
  return new Promise((resolve, reject) => {
    resolve(data)
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
      // console.log(data)
      console.log(e.target.id.toLowerCase())
      if (e.target.id.toLowerCase() !== 'all') {
        var filtered = data.filter(function (item) {
          return item.status.toLowerCase() === e.target.id.toLowerCase()
        })
        buildElements(filtered)
      } else {
        buildElements(data)
      }
    })
  }
})

let searchQuery = ''

/**
 *
 * @param {string} query - the search query
 * @param {object[]} list - the list to be searched
 * @returns {object[]} - the array of matching objects
 */

function search(query, list) {
  const options = {
    threshold: 0.3,
    keys: [
      'name', 'company', 'status', 'email', 'telephone', 'bio', 'hobbies', 'missions.title', 'missions.date', 'missions.body'
    ]
  }
  const fuse = new Fuse(list, options)

  return fuse.search(query)
}

searchForm.addEventListener('submit', function (e) {
  e.preventDefault()
  searchQuery = searchInput.value
  if (searchQuery.trim() === '') {
    return getData(URL).then(function (data) {
      buildElements(data)
    })
  } else {
    getData(URL).then(function (data) {
      buildElements(search(searchQuery, data))
    })
  }
})
searchInput.addEventListener('keyup', function (e) {
  if (e.target.value === searchQuery) console.log(e.target.value)
  searchQuery = e.target.value
  if (e.target.value.trim() === '') {
    return getData(URL).then(function (data) {
      buildElements(data)
    })
  } else {
    getData(URL).then(function (data) {
      buildElements(search(e.target.value, data))
    })
  }
})

searchInput.addEventListener('blur', function (e) {
  if (e.target.value.trim() === '') {
    return getData(URL).then(function (data) {
      buildElements(data)
    })
  }
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
  resetContainer(container)
  data.forEach(function (person) {
    container.appendChild(buildCard(person))
  })
}

window.createElement = createElement
window.buildCard = buildCard
