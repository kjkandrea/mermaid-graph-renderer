import { render } from './api/mermaidRenderer'
import keyPadGraph from './graphs/keyPadGraph'

const main = {
  init(edges) {
    const mermaidFlowchart = this.parseGraph(edges)
    this.render(mermaidFlowchart)
  },
  parseGraph(edges) {
    let content = 'flowchart'
    for (const vertex1 in edges) {
      for (const vertex2 in edges[vertex1]) {
        content += `\n${vertex1}--${edges[vertex1][vertex2]}-->${vertex2}`
      }
    }

    return content
  },
  render(graph) {
    const mermaidElement = document.getElementById('mermaid')
    render(mermaidElement, graph)
  }
}
document.addEventListener('DOMContentLoaded', () => main.init(keyPadGraph.edges))