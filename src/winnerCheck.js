export function winnerCheck(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    let tie = true;

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if(squares[a] && squares[b] && squares[c]) {
        if (squares[a].type.name === squares[b].type.name && squares[a].type.name === squares[c].type.name) {
          return squares[a].type.name;
        }
      }
    }

    for (let i=0; i<9; i++) {
      if(!squares[i]) tie=false;
    }
    
    if(tie) return 'tie';
    else return null;
  }