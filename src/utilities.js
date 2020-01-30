import { CardSidePane } from './CardSidePane'
import { CardBottomPane } from './CardBottomPane'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)
/**
 * A function that creates an html element
 *
 * @param {string} tag - the html tag
 * @param {object} attributes - an object containing key,value pairs of attributes and values
 * @param {array} children - an array of child elements
 * @returns {node} children - an array of child elements
 */
export function createElement(tag, attributes, children) {
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

export function expandCard(person) {
  const element = document.querySelector(`div[data-key='${person.index}']`)
  const card = document.querySelector(`div[data-key='${person.index}'] .card_wrapper:first-child`)
  // console.log(card)
  const isFirst = ($(element).is('div:first-child'))
  console.log(element.getBoundingClientRect())
  const tl = gsap.timeline({
    defaults: {
      duration: 0.5,
      ease: 'back.inOut(1)'
    }
  })
  const div = createElement('div', { class: 'col-12 row p-0 m-0' })
  $(element).before(div)
  let { x, y, width, top, height } = element.getBoundingClientRect()
  console.log(x, y)
  const divCoord = div.getBoundingClientRect()
  console.log((divCoord.y), y)
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
  tl.to(div, {
    height: height,
    onComplete: function () {
      x = gsap.getProperty(element, 'x')
      div.style.height = 'auto'
      div.style.minHeight = height + 'px'
    }
  })
    .to(element, {
      ...translate,
      onComplete: function () {
        // eslint-disable-next-line no-undef
        // $(element).removeClass('col-lg-3', 'col-sm-6')
        $(div).append(element)
        $(element).css('transform', 'translate(0,0)')
        const side = CardSidePane(person)
        const bottom = CardBottomPane(person)
        const { x, y, height } = element.getBoundingClientRect()
        const sideCoords = side.getBoundingClientRect()
        $(element).after(side)
        // element.style.position = 'fixed'
        // element.style.top = '0'
        // element.style.left = '0'
        // element.style.transform = 'translate(0,0)'

        // // side.style.transform = `translate(${(-sideCoords.x + width)}px, -${top}px)`
        // side.style.transformOrigin = 'top left'
        // side.style.position = 'fixed'
        // side.style.left = width + 'px'
        // side.style.top = '0'
        // side.style.transform = 'translate(0,0)'
        // side.style.height = height + 'px'
        // side.style.zIndex = 1000
        // element.style.zIndex = 1000
        // $(bottom).css({
        //   'transform-origin': 'top left',
        //   position: 'fixed',
        //   left: 0,
        //   top: height + 'px',
        //   'z-index': '1000'
        // })
        // // eslint-disable-next-line no-undef
        tl.from(side, {
          x: -200,
          opacity: 0,
          onComplete: function () {
            $(side).after(bottom)
          }
        }).from(bottom, {
          scaleY: 0
        })
      }
    }, '-=0.5')

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
