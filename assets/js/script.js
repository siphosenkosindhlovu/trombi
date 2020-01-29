/* eslint-disable space-before-function-paren */
var URL = 'assets/js/data3.json'
var container = document.getElementById('mainGrid')
var nav = document.querySelector('.nav')
var searchForm = document.querySelector('form[name=search]')
var searchInput = document.querySelector('input')
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

var searchQuery = ''

searchForm.addEventListener('submit', function (e) {
  e.preventDefault()
  alert('Ping!')
})
searchInput.addEventListener('keyup', function (e) {
  if (e.target.value === searchQuery) console.log(e.target.value)
  searchQuery = e.target.value
  getData(URL).then(function (data) {

  })
})

function resetContainer(container) {
  container.innerHTML = ''
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
  data.forEach(function (person) {
    container.appendChild(buildCard(person))
  })
}

var classes = {
  default: ['col-12', 'col-md-6', 'col-lg-4', 'row', 'm-0'],
  containerOpen: ['col-12', 'col-sm-12', 'col-md-12', 'col-lg-12'],
  cardWrapperDefault: ['card_wrapper', 'm-auto', 'm-lg-0', 'col-12'],
  cardWrapperThumbOpen: ['col-sm-8', 'm-0', 'col-lg-4'],
  cardWrapperSideDefault: ['card_side-pane', 'col-sm-8', 'm-0', 'col-lg-4', 'd-none'],
  cardWrapperBottomDefault: ['card_bottom-pane', 'col-lg-12', 'd-none']
}
/**
 *
 * A funcition that builds the non expanded card
 *
 * @param {object} person - the person object used to build the card
 * @returns {node} - the .card_wrapper element and all itd children
 *
 */
function buildCard(person) {
  var expandButton = createElement('button', { class: 'card_expand-button mt-auto' }, ['+'])
  expandButton.addEventListener('click', function (e) {
    console.log('clicked ', person.index)
  })
  var p = createElement('p', null, [...person.tags])
  var H3 = createElement('h3', { class: 'text-primary font-light' }, [person.company])
  var H2 = createElement('h2', { class: 'margin-0 font-regular' }, [person.name])
  var CardText = createElement('div', { class: 'card_text' }, [H3, p])
  var CardTitle = createElement('div', { class: 'card_title' }, [H2])
  var CardPill = createElement('span', { class: 'card_pill' }, [document.createTextNode(person.status)])
  var CardImg = createElement(
    'img',
    {
      class: 'card_img',
      src: 'assets/images/240_F_9.png'
    })
  var CardBody = createElement(
    'div',
    { class: 'card_body' },
    [
      CardTitle,
      CardText
    ])
  var Card = createElement(
    'div',
    { class: 'card' },
    [
      CardPill,
      CardImg,
      CardBody,
      expandButton
    ])
  var CardWrapper = createElement(
    'div',
    { class: 'card_wrapper m-auto m-lg-0 col-12' },
    [
      Card
    ])

  var Container = createElement('div', { 'data-key': person.id, class: classes.default.join(' ') }, [CardWrapper])
  return Container
}

function CardSidePane(props) {
  return createElement('div', { class: 'card_wrapper m-auto m-lg-0 card_side-pane col-12 col-sm-8' }, [
    createElement('div', { class: 'card' }, [
      createElement('section', { class: 'card_body' }, [
        createElement('h2', { class: 'card_title h1 text-primary font-regular' }, [
          'Bio'
        ]),
        createElement('p', null, [props.bio])
      ]),
      createElement('div', { class: 'row' }, [
        createElement('div', { class: 'col-xs-12 col-lg-6' }, [
          createElement('div', { class: 'card_body' }, [
            createElement('h2', { class: 'card_title h1 text-primary font-regular' }, [
              'Hobbies'
            ]),
            createElement('p', null, [
              createElement('ul', {
                class: 'arrow-list'
              }, props.hobbies.map(hobby => createElement('li', null, hobby)))
            ])
          ])
        ]),
        createElement('div', { class: 'col-xs-12 col-lg-6' }, [
          createElement('div', { class: 'card_body' }, [
            createElement('h2', { class: 'card_title h1 text-primary font-regular' }, ['Contact']),
            createElement('p', null, [
              createElement('span', { class: 'text-primary' }, ['Mail : ']),
              props.email,
              createElement('br'),
              createElement('span', { class: 'text-primary' }, ['Téléphone : ']),
              props.telephone
            ])
          ])
        ])
      ])
    ])
  ])
}

function CardBottomPane(props) {
  function Missions(mission) {
    return createElement('div', { class: 'col-12 col-lg-4 my-3' }, [
      createElement('h3', { class: 'h2 text-secondary font-light' }, [
        mission.title
      ]),
      createElement('p', { class: 'text-muted' }, [
        mission.date
      ]),
      createElement('p', null, [
        createElement('ul', { class: 'arrow-list' },
          mission.body.map(function (item) {
            return createElement('li', null, [item])
          })
        )
      ])
    ])
  }

  return createElement('div', { class: 'card_wrapper m-auto m-lg-0 card_bottom-pane col-12 col-sm-8 col-lg-12' }, [
    createElement('div', { class: 'card' }, [
      createElement('div', { class: 'card_body' }, [
        createElement('h2', { class: 'card_title h1 text-primary font-regular' }, [
          'Missions'
        ]),
        createElement('div', { class: 'row' }, props.missions.map(Missions)
        )
      ])
    ])
  ])
}

/**
 * A function that creates an html element
 *
 * @param {string} tag - the html tag
 * @param {object} attributes - an object containing key,value pairs of attributes and values
 * @param {array} children - an array of child elements
 * @returns {node} children - an array of child elements
 */
function createElement(tag, attributes, children) {
  var element = document.createElement(tag)

  if (attributes) {
    var attr = Object.keys(attributes)
    attr.forEach(function (attribute) {
      element.setAttribute(attribute, attributes[attribute])
    })
  }

  if (children && typeof children !== 'string') {
    // console.log(typeof children)
    children.forEach(function (child) {
      if (typeof child !== 'string' && Boolean(child)) element.appendChild(child)
      else element.appendChild(document.createTextNode(child))
    })
  } else if (typeof children === 'string') {
    element.appendChild(document.createTextNode(children))
  }

  return element
}

window.createElement = createElement
window.buildCard = buildCard
