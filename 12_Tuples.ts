type CellValue = 'x' | 'o' | '';

//Tuples
type GameBoard = [
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue]
]


const gameBoard: GameBoard = [
    ['x', 'o', ''],
    ['x', 'o', ''],
    ['x', '', ''],
    // ['x', '', '', 'x']
]