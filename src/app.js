import { render } from './api/mermaidRenderer'

const main = () => {
  const mermaidElement = document.getElementById('mermaid')
  const content = `
    flowchart LR
        1-- 1 ---2
        2-- 1 ---3
  `
  render(mermaidElement, content)
}
document.addEventListener('DOMContentLoaded', () => main())