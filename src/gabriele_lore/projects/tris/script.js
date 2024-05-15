/** @format */

class TrisGame {
  grid = ['', '', '', '', '', '', '', '', ''];
  constructor() {}
  inserisciSimbolo(simbolo, posizione) {
    checkGrid();
    if (posizione == '') {
      this.grid[posizione] = simbolo;
    } else {
      console.log('Posizione occupata');
      return false;
    }
    AI();
    return true;
  }
  checkGrid() {
    checkHorizontalGrids();
    checkVerticalGrids();
    checkHDiagonalGrids();
    checkFilled();
  }
  checkHorizontalGrids() {
    for (let i = 0; i < 9; i = i + 3) {
      if (this.grid[0 + i] == this.grid[1 + i] && this.grid[1 + i] == this.grid[2 + i]) {
        console.log(this.grid[0 + i] + ' Vince');
      }
    }
  }
  checkVerticalGrids() {
    for (let i = 0; i < 3; i++) {
      if (this.grid[0 + i] == this.grid[3 + i] && this.grid[3 + i] == this.grid[6 + i]) {
        console.log(this.grid[0 + i] + ' Vince');
      }
    }
  }
  checkHDiagonalGrids() {
    if (this.grid[6] == this.grid[4] && this.grid[4] == this.grid[2]) {
      console.log(this.grid[6] + ' Vince');
    }
    if (this.grid[8] == this.grid[4] && this.grid[4] == this.grid[0]) {
      console.log(this.grid[8] + ' Vince');
    }
  }
  checkFilled() {
    function OnFilter(el) {
      if (el == '') return false;
      return true;
    }
    return this.grid.filter(OnFilter()).lenght == 0;
  }
  AI() {
    while (inserisciSimbolo('O', Math.floor(Math.random * this.grid.lenght))) {}
  }
}
