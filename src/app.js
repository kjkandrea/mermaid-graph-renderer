import { render } from './api/mermaidRenderer'

const main = {
  init() {
    const graph = this.maidGraph()
    this.render(graph)
  },
  maidGraph() {
    return 'flowchart\n1-- 1 ---2\n2-- 1 ---3\n'
  },
  render(graph) {
    const mermaidElement = document.getElementById('mermaid')
    render(mermaidElement, graph)
  }
}
document.addEventListener('DOMContentLoaded', () => main.init())