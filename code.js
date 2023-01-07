
function determinant(m) {
  // return the determinant of the matrix passed in
  let numRows = m.length
  let numCol = m[0].length
  
  if (numRows === 1 && numCol === 1) {
    return m[0][0]
  }
  if (numRows === 2 && numCol === 2) {
    return (m[0][0]*m[1][1]-m[0][1]*m[1][0 ])
  }
//   if (numRows === 3 && numCol === 3) {
//     return (m[0][0]*determinant(GetMinorMatrix(0,0, m))-
//             m[0][1]*determinant(GetMinorMatrix(0,1, m))+
//             m[0][2]*determinant(GetMinorMatrix(0,2, m)))
//   }
  let res = 0
  for (let t = 0; t < numCol; t++) {
    if (t%2 === 0) {
      res += m[0][t]*determinant(GetMinorMatrix(0,t,m)) 
    } else {
      res -= m[0][t]*determinant(GetMinorMatrix(0,t,m)) 
    }
  }
      return res
};
function GetMinorMatrix(row,col, m) {
  let numRows = m.length
  let numCol = m[0].length
  let  minor = []
    for (let k = 0; k< numRows-1; k++){
     minor.push([])
    }

  for (let i = 0; i<numRows; i++) {
    if (i == row) {
      continue
    }

    for (let j = 0; j<numCol; j++) {
      if (j == col) {
        continue
      }
        let value = m[i][j]
        minor[i-1].push(value)
    }
  }
  return minor
}
