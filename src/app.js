import { render } from './api/mermaidRenderer'
import keyPadGraph from './graphs/keyPadGraph'

const main = {
  init(edges) {
    const mermaidFlowchart = this.genMermaidFlowChart(edges)
    this.render(mermaidFlowchart)
  },
  genMermaidFlowChart(edges) {
    const texts = ['flowchart']
    Object.keys(edges).forEach(vertex1 => {
      Object.keys(edges[vertex1]).forEach(vertex2 => {
        texts.push(`${vertex1}--${edges[vertex1][vertex2]}-->${vertex2}`)
      })
    })
    return texts.join('\n')
  },
  render(graph) {
    const mermaidElement = document.getElementById('mermaid')
    render(mermaidElement, graph)
  }
}
document.addEventListener('DOMContentLoaded', () => main.init(keyPadGraph.edges))