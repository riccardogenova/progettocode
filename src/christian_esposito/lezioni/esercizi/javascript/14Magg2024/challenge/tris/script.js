/** @format */

class Tris {
  x = 'X';
  o = 'O';

  static arrayTris = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];

  trisGame(position) {
    /*******************************************
        RAPPRESENTAZIONE DEL GIOCO IN CONSOLE
        *********************************************/
    for (let i = 0; i < Tris.arrayTris.length; i++) {
      /*******************************************
                RAPPRESENTAZIONE DEL GIOCO IN CONSOLE
            *********************************************/
      const rowLine = Tris.arrayTris[i];
      let pipeString = '|';

      /********************************************
                           MECCANICA DI GIOCO 
            ********************************************/
      let pos = Tris.arrayTris[i].filter(e => {
        return e === position;
      });

      // console.log(`righe ${i}`,Tris.arrayTris[i])
      for (let j = 0; j < rowLine.length; j++) {
        /********************************************
                               MECCANICA DI GIOCO 
                ********************************************/
        let change = pos[0] === position ? (pos[0] = 'x') : rowLine[j];
        /*******************************************
                    RAPPRESENTAZIONE DEL GIOCO IN CONSOLE
                *********************************************/
        pipeString += (rowLine[j] = change) + '|' + ' ';
      }
      /*******************************************
                RAPPRESENTAZIONE DEL GIOCO IN CONSOLE
            *********************************************/
      console.log(pipeString);
      console.log('__|__|__|___');
    }
  }
}

const tic = new Tris();

tic.trisGame(3);
