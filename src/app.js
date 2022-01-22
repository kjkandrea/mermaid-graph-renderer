import { render } from './api/mermaidRenderer'
import keyPadGraph from './graphs/keyPadGraph'

const main = {
  init() {
    const graph = this.madeGraph()
    this.render(graph)
  },
  madeGraph() {
    console.log(keyPadGraph.edges)

    return 'flowchart\n1-- 1 ---2\n2-- 1 ---3\n'
  },
  render(graph) {
    const mermaidElement = document.getElementById('mermaid')
    render(mermaidElement, graph)
  }
}
document.addEventListener('DOMContentLoaded', () => main.init())