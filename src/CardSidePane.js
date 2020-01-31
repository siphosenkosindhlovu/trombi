import { createElement } from './utilities'
/**
 *
 * @module CardSidePane
 */

/**
 * A function that builds the .card_side-pane element
 *
 * @param {*} props - expects a persons object.
 * @returns {HTMLDivElement} - .card_side-title element
 */
export function CardSidePane(props) {
  return createElement('div', { class: 'card_wrapper m-auto m-lg-0 card_side-pane col-12 col-sm-6 col-lg-9' }, [
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
