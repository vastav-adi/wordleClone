import React, { useState } from "react";
import { useEffect } from "react";

const Tile = (props) =>{
  const {
    index,
    tileDataObj={
      "letter":"",
      "letterState":"default"
    }
  } = props;
  
  // default, exact, present, absent 
  const [classname, setClassname] = useState("tile default");

  useEffect(()=>{
    let str = `tile ${tileDataObj.letterState}`;
    setClassname(str);
  },[tileDataObj])

  return(
    <div className={classname}>
      {tileDataObj.letter}
    </div>
  )
}

export default Tile