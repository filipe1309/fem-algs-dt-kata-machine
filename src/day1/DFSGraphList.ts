function walk(graph: WeightedAdjacencyList, 
  curr: number, 
  needle: number,
  seen: Boolean[],
  path: number[]): boolean {
    if (seen[curr]) return false;

    // recurse
    //pre
    seen[curr] = true;
    path.push(curr);
    if (curr === needle) { return true; }

    //recurse
    const list = graph[curr];
    for (let i = 0; i < list.length; i++) {
      const edge = list[i];
      if (walk(graph, edge.to, needle, seen, path)) { 
        return true;
      }
    }

    //post
    path.pop();

    return false;
  }

// Complexity (wc): O(v + e) time, v=vertices,e=edges
export default function dfs(
  graph: WeightedAdjacencyList, 
  source: number, 
  needle: number): number[] | null {
    let path: number[] = [];
    walk(graph, source, needle, [], path);
    return path.length ? path : null;
}
