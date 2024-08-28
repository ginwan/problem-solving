function openLock(deadends, target) {
  const deadSet = new Set(deadends);
  const visited = new Set();
  const queue = [["0000", 0]]; // The queue holds pairs of [current state, number of moves]

  // If initial state is a deadend, return -1
  if (deadSet.has("0000")) return -1;

  while (queue.length > 0) {
    const [current, moves] = queue.shift();

    // If we reach the target, return the number of moves
    if (current === target) return moves;

    // Generate all possible next states
    for (let i = 0; i < 4; i++) {
      for (let d of [-1, 1]) {
        const newDigit = (Number(current[i]) + d + 10) % 10;
        const nextState = current.slice(0, i) + newDigit + current.slice(i + 1);

        // If the next state is not a deadend and hasn't been visited
        if (!deadSet.has(nextState) && !visited.has(nextState)) {
          visited.add(nextState);
          queue.push([nextState, moves + 1]);
        }
      }
    }
  }

  // If we exhaust the queue without finding the target, return -1
  return -1;
}

// Example usage:
const deadends = ["0201", "0101", "0102", "1212", "2002"];
const target = "0202";
console.log(openLock(deadends, target)); // Output: 6
