import mermaid from 'mermaid'

export const render = (element, content) => {
  element.innerHTML = content
  mermaid.init({noteMargin: 10}, element);
}