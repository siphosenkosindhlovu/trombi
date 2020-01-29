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

// export function expandCard(person){
//   document.querySelector('[data-key=]')
// }
