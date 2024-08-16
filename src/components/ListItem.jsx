import React from 'react'
import { useState } from 'react'

const ListItem = ({id ,name, gold, silver, bronze, onDelete}) => {

    //삭제 클릭시 이벤트함수
    const onClickDelete = () => {
        onDelete(id) //이거를 실행해 , 타겟의 아이디값 넘겨주기
    }

  return (
    <div className='ListItem'>
        <div className='name'>{name}</div>
        <div className='gold'>{gold}</div>
        <div className='silver'>{silver}</div>
        <div className='bronze'>{bronze}</div>
        <button onClick={onClickDelete}>삭제</button>
    </div>
  )
}

export default ListItem