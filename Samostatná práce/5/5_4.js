// Handle the cell's state
function processCell(cell, x, y, z) {
    if (cell.isWall) {
      console.log("Encountered wall at (" + x + ", " + y + ", " + z + ").");
    } else if (cell.isExit) {
      console.log("Exit found at (" + x + ", " + y + ", " + z + ").");
      return true; // Indicates exit found
    } else {
      console.log("Moving through (" + x + ", " + y + ", " + z + ").");
    }
    return false; // Indicates no exit found
  }
  
  // Navigate the maze
  function navigateMaze(maze) {
    for (let x = 0; x < maze.length; x++) {
      for (let y = 0; y < maze[x].length; y++) {
        for (let z = 0; z < maze[x][y].length; z++) {
          let cell = maze[x][y][z];
          if (processCell(cell, x, y, z)) {
            return; // Exit found, stop processing
          }
        }
      }
    }
    console.log("No exit found in the maze.");
  }
  
  // Example usage (define a sample maze structure)
  const maze = [
    [[{ isWall: false, isExit: false }, { isWall: false, isExit: true }]],
    [[[{ isWall: true }]]],
  ];
  
  navigateMaze(maze);  