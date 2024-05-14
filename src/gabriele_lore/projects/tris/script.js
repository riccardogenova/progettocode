class TrisGame {
    grid = ['','','','','','','','',''];
    constructor()
    {
        
    }
    InserisciSimbolo(simbolo, posizione)
    {
        checkGrid();
        if(posizione=='')
        {
            grid[posizione] = simbolo;
        }
        else
        {
            console.log("Posizione occupata");
            return false;
        }
        AI();
        return true;
    }
    checkGrid()
    {
        CheckHorizontalGrids();
        CheckVerticalGrids();
        CheckHDiagonalGrids();
        CheckFilled();
    }
    CheckHorizontalGrids()
    {
        for(let i = 0; i < 9; i = i + 3)
        {
            if(grid[0+i] == grid[1+i] && grid[1+i] == grid[2+i])
            {
                console.log(grid[0+i] + " Vince")
            }
        }
    }
    CheckVerticalGrids()
    {
        for(let i = 0; i < 3; i++)
        {
            if(grid[0+i] == grid[3+i] && grid[3+i] == grid[6+i])
            {
                console.log(grid[0+i] + " Vince")
            }
        }
    }
    CheckHDiagonalGrids()
    {
        if(grid[6] == grid[4] && grid[4] == grid[2])
        {
            console.log(grid[6] + " Vince");
        }
        if(grid[8] == grid[4] && grid[4] == grid[0])
        {
            console.log(grid[8] + " Vince");
        }
    }
    CheckFilled()
    {
       function OnFilter(el)
        {
            if(el=='')
                return false;
            return true;
        }
        return grid.filter(OnFilter()).lenght == 0;

    }
    AI()
    {
        while(InserisciSimbolo('O', Math.floor(Math.random*grid.lenght)))
        {
            
        }
    }
}
