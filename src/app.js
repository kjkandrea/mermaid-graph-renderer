import { render } from './api/mermaidRenderer'

const main = () => {
  const mermaidElement = document.getElementById('mermaid')
  const content = 'flowchart\n1-- 1 ---2\n2-- 1 ---3\n'
  render(mermaidElement, content)
}
document.addEventListener('DOMContentLoaded', () => main())