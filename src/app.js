import { render } from './api/mermaidRenderer'
import keyPadGraph from './graphs/keyPadGraph'

const main = {
  init() {
    const graph = this.madeGraph()
    this.render(graph)
  },
  madeGraph() {
    const edges = keyPadGraph.edges;
    for (const vertex1 in edges) {
      for (const vertex2 in edges[vertex1]) {
        console.log('vertex2 : %s', vertex2)
      }
    }


    return 'flowchart\n1-- 1 -->2\n2-- 1 -->1\n2-- 1 -->3\n3 -- 1 -->2'
  },
  render(graph) {
    const mermaidElement = document.getElementById('mermaid')
    render(mermaidElement, graph)
  }
}
document.addEventListener('DOMContentLoaded', () => main.init())