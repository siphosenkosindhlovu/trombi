import { classes } from './classes'
import { createElement, expandCard, collapseCard, openObject } from './utilities'
/**
 *
 * @module CardMain
 */

/**
 *
 * A funcition that builds the non expanded card
 *
 * @param {object} person - the person object used to build the card
 * @returns {node} - the .card_wrapper element and all its children
 *
 */
export function buildCard(person) {
  const expandButton = createElement('button', { class: 'card_expand-button mt-auto' }, ['+'])
  expandButton.addEventListener('click', function (e) {
    $(e.target).toggleClass('card_expand-button--close')
    if (openObject.key === person.index && openObject.isOpen) {
      $('.card_expand-button--close').removeClass('card_expand-button--close')
      collapseCard()
    } else {
      expandCard(person)
    }
  })
  const p = createElement('p', null, [...person.tags])
  const H3 = createElement('h3', { class: 'text-primary font-light' }, [person.company])
  const H2 = createElement('h2', { class: 'margin-0 font-regular' }, [person.name])
  const CardText = createElement('div', { class: 'card_text' }, [H3, p])
  const CardTitle = createElement('div', { class: 'card_title' }, [H2])
  const CardPill = createElement('span', { class: 'card_pill' }, [document.createTextNode(person.status)])
  const CardImg = createElement('img', {
    class: 'card_img',
    src: 'assets/images/240_F_9.png'
  })
  const CardBody = createElement('div', { class: 'card_body' }, [
    CardTitle,
    CardText
  ])
  const Card = createElement('div', { class: 'card' }, [
    CardPill,
    CardImg,
    CardBody,
    expandButton
  ])

  const Container = createElement('div', {
    'data-key': person.index,
    class: classes.default.join(' ')
  }, [Card])
  return Container
}
