import { render } from './api/mermaidRenderer'
import keyPadGraph from './graphs/keyPadGraph'

const main = {
  init(edges) {
    const mermaidFlowchart = this.genMermaidFlowChart(edges)
    this.render(mermaidFlowchart)
  },
  genMermaidFlowChart(edges) {
    return Object.keys(edges)
      .reduce((acc, vertex1) => {
        Object.keys(edges[vertex1]).forEach(vertex2 => {
          acc.push(`${vertex1}--${edges[vertex1][vertex2]}-->${vertex2}`)
        })
        return acc;
      }, ['flowchart'])
      .join('\n')
  },
  render(graph) {
    const mermaidElement = document.getElementById('mermaid')
    render(mermaidElement, graph)
  }
}
document.addEventListener('DOMContentLoaded', () => main.init(keyPadGraph.edges))