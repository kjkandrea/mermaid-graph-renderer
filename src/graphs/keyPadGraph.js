import UndirectedGraph from '../constructors/UndirectedGraph'

const keyPadGraph = new UndirectedGraph()
keyPadGraph.addVertex(1)
keyPadGraph.addVertex(2)
keyPadGraph.addVertex(3)
keyPadGraph.addVertex(4)
keyPadGraph.addVertex(5)
keyPadGraph.addVertex(6)
keyPadGraph.addVertex(7)
keyPadGraph.addVertex(8)
keyPadGraph.addVertex(9)
keyPadGraph.addVertex(0)
keyPadGraph.addEdge(1, 2, 1)
keyPadGraph.addEdge(2, 3, 1)
keyPadGraph.addEdge(4, 5, 1)
keyPadGraph.addEdge(5, 6, 1)
keyPadGraph.addEdge(7, 8, 1)
keyPadGraph.addEdge(8, 9, 1)
keyPadGraph.addEdge(8, 0, 1)
keyPadGraph.addEdge(1, 4, 1)
keyPadGraph.addEdge(2, 5, 1)
keyPadGraph.addEdge(3, 6, 1)
keyPadGraph.addEdge(4, 7, 1)
keyPadGraph.addEdge(5, 8, 1)
keyPadGraph.addEdge(6, 9, 1)


export default keyPadGraph;