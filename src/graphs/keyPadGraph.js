import UndirectedGraph from '../constructors/UndirectedGraph'

const keyPadGraph = new UndirectedGraph()
keyPadGraph.addVertex(1)
keyPadGraph.addVertex(2)
keyPadGraph.addVertex(3)
keyPadGraph.addEdge(1, 2, 1)
keyPadGraph.addEdge(2, 3, 1)
keyPadGraph.addEdge(1, 3, 3)

export default keyPadGraph;