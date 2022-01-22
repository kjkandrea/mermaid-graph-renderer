import { render } from './api/mermaidRenderer.js'

const main = () => {
  const mermaidElement = document.getElementById('mermaid')
  render(mermaidElement)
}

document.addEventListener('DOMContentLoaded', () => main())