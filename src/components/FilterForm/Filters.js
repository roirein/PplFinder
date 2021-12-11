import * as S from "../UserList/style";
import CheckBox from "../CheckBox";
import React, { useEffect, useState } from "react";

const Filters = ({data, onFilterChange}) => {

  const [states, setStates] = useState(new Array(data.length).fill(false))

  const handleCheckChange = (index, value) => {
    const updatedStates = data.map(itemData => {
      return itemData.value === value ? !states[data.indexOf(itemData)] : states[data.indexOf(itemData)]
    })
    setStates(updatedStates)
    onFilterChange(updatedStates)
  }

  return(
    <S.Filters>
      {
        data.map((itemData,index) => {
          return (
            <CheckBox value={itemData.value} label={itemData.label} isChecked={states[index]} onChange={() => handleCheckChange(index, itemData.value)}/>
          )
        })
      }
    </S.Filters>
  )
}

export default Filters
