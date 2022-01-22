const main = () => {
  const mermaidElement = document.getElementById('mermaid')

  console.log(mermaidElement)
}

// async function test () {
//   const svg = await renderMermaid(
//     `pie title NETFLIX
//         "Time spent looking for movie" : 90
//         "Time spent watching it" : 10`
//   );
//   console.log(svg);
// }

document.addEventListener('DOMContentLoaded', () => main())