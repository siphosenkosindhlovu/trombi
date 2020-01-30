import { createElement } from './utilities'
export function CardBottomPane(props) {
  function Missions(mission) {
    return createElement('div', { class: 'col-12 col-lg-4 my-3' }, [
      createElement('h3', { class: 'h2 text-secondary font-light' }, [
        mission.title
      ]),
      createElement('p', { class: 'text-muted' }, [
        mission.date
      ]),
      createElement('p', null, [
        createElement('ul', { class: 'arrow-list' }, mission.body.map(function (item) {
          return createElement('li', null, [item])
        }))
      ])
    ])
  }
  return createElement('div', { class: 'card_wrapper m-auto m-lg-0 card_bottom-pane col-12' }, [
    createElement('div', { class: 'card' }, [
      createElement('div', { class: 'card_body' }, [
        createElement('h2', { class: 'card_title h1 text-primary font-regular' }, [
          'Missions'
        ]),
        createElement('div', { class: 'row' }, props.missions.map(Missions))
      ])
    ])
  ])
}
