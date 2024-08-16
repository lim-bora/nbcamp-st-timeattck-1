import { useState } from 'react'
import Input from './components/Input'
import List from './components/List'

function App() {
  //리스트 상태값
  const [country, setCountry] = useState([]);

  //국가추가 생성함수
  const onCreate = ({name, gold, silver, bronze})=>{
    const newList = {
      id : country.length+1,
      name,
      gold,
      silver,
      bronze,
    }

    setCountry([...country, newList])
  }

  //삭제 
  const onDelete = (target) =>{ //타겟의 아이디값
    setCountry(country.filter((data)=>
      data.id !== target //다시세팅하는데 조건은 지정한리스트의 아이디와 같지않은것만 반환
    ))
  }

  //업데이트
  const onUpdate = (targetName, setGold, setSilver, setBronze) => { //변경해야할 사항들 : 이름, 메달수들
    setCountry(country.map((data) =>{
      if(data.name === targetName){
        return {
          ...data,
          gold : setGold,
          silver : setSilver,
          bronze : setBronze,
        }
      }
    }))
  }

  return (
    <div className='App'>
      <h1>2024 파리 올림픽</h1>
      <Input country={country} onCreate={onCreate} setCountry={setCountry} onUpdate={onUpdate}/>
      <List country={country} onDelete={onDelete} onUpdate={onUpdate}/>
    </div>
  )
}

export default App
