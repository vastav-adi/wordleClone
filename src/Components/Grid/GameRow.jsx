import React, { useEffect, useState } from 'react';

import { createIndex } from '../../Util/Util';
import Tile from './Tile';

const GameRow = ({ index, rowObjArr, activeRow }) => {

  useEffect(() => {
    // console.log(rowObjArr)
  }, [rowObjArr])

  const getTileData = (tile) => {
    let tileDataObj = {
      "letter": "",
      "letterState": ""
    }

    if (rowObjArr.length > 0) {
      if (rowObjArr[index] !== undefined) {
        tileDataObj.letter = rowObjArr[index].rowWord[tile] !== undefined ? rowObjArr[index].rowWord[tile] : "";
        tileDataObj.letterState = rowObjArr[index].letterStateArr[tile];

        return tileDataObj;
      }
    }
  }

  const renderRows = (rowIndex) => {
    let itemArr = [];
    for (let tile = 0; tile < 5; tile++) {
      let stdIndex = createIndex(rowIndex, tile);
      itemArr.push(
        <div className='col p-1' key={tile}>
          <Tile index={stdIndex} tileDataObj={getTileData(tile)} />
        </div>
      )
    }
    return itemArr;
  }

  return (
    <div className='row m-0'>
      {renderRows(index)}
    </div>
  )
}

export default GameRow;