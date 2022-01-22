import mermaid from 'mermaid'
import { render } from './api/mermaidRenderer.js'

const main = () => {
  const mermaidElement = document.getElementById('mermaid')

  mermaidElement.innerHTML = `
    flowchart LR
        1-- 1 ---2
        2-- 1 ---3
  `.trim()


  mermaid.init({noteMargin: 10}, mermaidElement);
}
document.addEventListener('DOMContentLoaded', () => main())