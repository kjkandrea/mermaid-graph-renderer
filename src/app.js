import { render } from './api/mermaidRenderer.js'

document.addEventListener('DOMContentLoaded', () => {
  const mermaidElement = document.getElementById('mermaid')
  render(mermaidElement)
})