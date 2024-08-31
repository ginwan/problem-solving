var cloneGraph = function (node) {
  let visited = {}; // hash map

  function dfs(node) {
    if (node === null) return node;

    if (node in visited) {
      return visited[node];
    }
    let copy = new Node(node.val);
    visited[node] = copy;

    for (let nei of node.neighbors) {
      copy.neighbors.push(dfs(nei));
    }

    return copy;
  }
  return dfs(node);
};

adjList = [
  [2, 4],
  [1, 3],
  [2, 4],
  [1, 3],
];

console.log(cloneGraph(adjList));
