/** @format */

class TrisGame {
  grid = ['', '', '', '', '', '', '', '', ''];
  inserisciSimbolo(simbolo, posizione) {
    this.checkGrid();
    if (posizione == '') {
      this.grid[posizione] = simbolo;
    } else {
      console.log('Posizione occupata');
      return false;
    }
    this.AI();
    return true;
  }
  checkGrid() {
    this.checkHorizontalGrids();
    this.checkVerticalGrids();
    this.checkHDiagonalGrids();
    this.checkFilled();
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
    while (this.inserisciSimbolo('O', Math.floor(Math.random * this.grid.lenght))) {
      console.log("Posizione occupata");
    }
  }
}
const game = new TrisGame();
game.inserisciSimbolo('O', 0);