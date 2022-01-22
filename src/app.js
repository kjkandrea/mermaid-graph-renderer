import { render } from './api/mermaidRenderer'
import keyPadGraph from './graphs/keyPadGraph'

const main = {
  init(edges) {
    const mermaidFlowchart = this.parseGraph(edges)
    this.render(mermaidFlowchart)
  },
  parseGraph(edges) {
    const texts = ['flowchart']
    for (const vertex1 in edges) {
      for (const vertex2 in edges[vertex1]) {
        texts.push(`${vertex1}--${edges[vertex1][vertex2]}-->${vertex2}`)
      }
    }
    return texts.join('\n')
  },
  render(graph) {
    const mermaidElement = document.getElementById('mermaid')
    render(mermaidElement, graph)
  }
}
document.addEventListener('DOMContentLoaded', () => main.init(keyPadGraph.edges))