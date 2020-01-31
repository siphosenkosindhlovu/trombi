/* eslint-disable no-undef */
import { CardSidePane } from './CardSidePane'
import { CardBottomPane } from './CardBottomPane'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)
const tl = gsap.timeline({
  defaults: {
    duration: 0.8,
    ease: 'back.inOut(1)'
  }
})
export const openObject = {
  key: null,
  isOpen: false,
  initialProps: {
    x: 0,
    y: 0
  },
  wrapper: null,
  mainCard: null,
  sideCard: null,
  bottomCard: null
}

export function hideOnClickOutside (selector) {
  const outsideClickListener = (event) => {
    const $target = $(event.target)
    console.log(!$target.closest(selector).length && $(selector).is(':visible'))
    if (!$target.closest(selector).length && $(selector).is(':visible')) {
      // $(selector).remove()
      collapseCard()
      removeClickListener()
    }
  }

  const removeClickListener = () => {
    document.removeEventListener('click', outsideClickListener)
  }

  document.addEventListener('click', outsideClickListener)
}

/**
 * A function that creates an html element
 *
 * @param {string} tag - the html tag
 * @param {object} attributes - an object containing key,value pairs of attributes and values
 * @param {array} children - an array of child elements
 * @returns {node} children - an array of child elements
 */
export function createElement (tag, attributes, children) {
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
      if (typeof child !== 'string' && Boolean(child)) { element.appendChild(child) } else { element.appendChild(document.createTextNode(child)) }
    })
  } else if (typeof children === 'string') {
    element.appendChild(document.createTextNode(children))
  }
  return element
}

export function collapseCard () {
  const { wrapper, mainCard, sideCard, bottomCard } = openObject
  const { x = 0, y = 0 } = openObject.initialProps
  const { height } = mainCard.getBoundingClientRect()
  console.log(height)
  wrapper.style.minHeight = 'unset'
  tl.add('end')
    .to(bottomCard, {
      y: -50,
      opacity: 0,
      onComplete: function () {
        $(bottomCard).remove()
      }
    }).to(sideCard, {
      x: -20,
      opacity: 0,
      onComplete: function () {
        $(sideCard).remove()
      }
    }, 'end').to(mainCard, {
      x: -x,
      y: -y
    }, 'end')
    .to(wrapper, {
      height: 0,
      onComplete: function () {
        $(wrapper).before(mainCard)
        $(mainCard).css('transform', 'translate(0,0)')

        $(wrapper).remove()
        openObject.isOpen = false
        openObject.key = null
      }
    })
}

export function expandCard (person) {
  const element = document.querySelector(`div[data-key='${person.index}']`)
  const card = document.querySelector(`div[data-key='${person.index}'] .card_wrapper:first-child`)
  // console.log(card)
  const isFirst = ($(element).is('div:first-child'))

  const div = createElement('div', { class: 'col-12 row p-0 m-0' })
  $(element).after(div)
  let { x, y, width, top, height } = element.getBoundingClientRect()
  const divCoord = div.getBoundingClientRect()
  // div.scrollIntoView()
  // $(div).append(element)
  let translate = {
    x: (divCoord.x - x),
    y: (divCoord.y - y)
  }
  if (isFirst) {
    translate = {
      x: 0,
      y: 0
    }
  }

  console.log(translate)
  openObject.initialProps = translate
  const side = CardSidePane(person)
  const bottom = CardBottomPane(person)
  // const { x, y, height } = element.getBoundingClientRect()
  const sideCoords = side.getBoundingClientRect()
  tl.add('start').to(div, {
    height: height,
    duration: 0.01,
    onComplete: function () {
      x = gsap.getProperty(element, 'x')
      div.style.height = 'auto'
      div.style.minHeight = height + 'px'
    }
  }, 'start').to(window, {
    scrollTo: div
  }, 'start')
    .to(element, {
      ...translate,
      onComplete: function () {
        // eslint-disable-next-line no-undef
        // $(element).removeClass('col-lg-3', 'col-sm-6')
        $(div).append(element)
        $(element).after(side)
        $(side).after(bottom)
        $(element).css('transform', 'translate(0,0)')
      }
    }, 'start').from(side, {
      x: -50,
      opacity: 0,
      onComplete: function () {
      }
    }).from(bottom, {
      y: -20,
      opacity: 0,
      onComplete: function () {
        openObject.wrapper = div
        openObject.mainCard = element
        openObject.sideCard = side
        openObject.bottomCard = bottom
        openObject.isOpen = true
        openObject.key = person.index
        hideOnClickOutside(div)
      }
    })

  // element.addEventListener('transitionend', function (e) {
  //   card.classList.add('col-lg-3')
  //   element.classList.remove('col-sm-6', 'col-lg-3')
  //   card.insertAdjacentElement('afterend', CardSidePane(person))
  //   console.log(e.target)
  // })
  // // element.style.left = `-${x}px`
  // // element.style.top = `-${y}px`
  // element.style.transform = `translate(-${x}px, -${y}px)`
}
