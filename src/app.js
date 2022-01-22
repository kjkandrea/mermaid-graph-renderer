import mermaid from 'mermaid'
import { render } from './api/mermaidRenderer.js'

const main = () => {
  const mermaidElement = document.getElementById('mermaid')

  render(mermaidElement)

  mermaid.initialize({
    startOnLoad: true
  })
}
document.addEventListener('DOMContentLoaded', () => main())