import React from 'react'
import { useState } from 'react'

const Input = ({country, setCountry, onCreate, onUpdate}) => {
    //이름, 각 메달별 상태값
    const [name, setName] = useState('');
    const [goldCount, setGoldCount] = useState(0);
    const [silverCount, setSilverCount] = useState(0);
    const [bronzeCount, setBronzeCount] = useState(0);

    //인풋별로 변경사항 있을경우 실행함수 : 타겟의 value값 가져와서 state업뎃
    const onChangeName = (e) => {
        setName(e.target.value)
    }
    const onChangeGold = (e) => {
        setGoldCount(+e.target.value)
    }
    const onChangeSilver = (e) => {
        setSilverCount(+e.target.value)
    }
    const onChangeBronze = (e) => {
        setBronzeCount(+e.target.value)
    }



    //국가추가버튼 클릭시 실행함수
    const onSubmit = (e) => {
        e.preventDefault();

        //중복체크
        const isOverlap = country.some(data => {
            return data.name === name
        })

        if(isOverlap === true){ //중복일경우
            onReset()
            return alert('이미 국가가 존재합니다.')
        }else{ //중복아니면 추가
            onReset()
            return onCreate({
                name : name, //네임 키의 키값은 name의 현재상태값을 저장
                gold : goldCount,
                silver : silverCount,
                bronze : bronzeCount,
            })
        }

    }

    //업데이트 클릭시 실행함수
    const onChangeUpdate = (e) => {
        e.preventDefault();

        //중복체크
        const isOverlap = country.some(data => {
            return data.name === name
        })

        if(isOverlap === true){ 
            onReset()
            return onUpdate(name, goldCount, silverCount, bronzeCount) //현재 상태들 넘겨줌
        }else{ 
            onReset()
            return alert('국가를 먼저 추가해주세요!')
        }

    }


    //초기화
    const onReset = () =>{
        setName('');
        setGoldCount(0);
        setSilverCount(0);
        setBronzeCount(0);
    }

  return (
    <div className='Input'>
        <ul>
            <li>
                <span>국가명</span>
                <input type='text' placeholder='국가입력' 
                value={name}
                onChange={onChangeName}></input>
            </li>
            <li>
                <span>금메달</span>
                <input type='number' 
                value={goldCount}
                onChange={onChangeGold}></input>
            </li>
            <li>
                <span>은메달</span>
                <input type='number' 
                value={silverCount}
                onChange={onChangeSilver}></input>
            </li>
            <li>
                <span>동메달</span>
                <input type='number' 
                value={bronzeCount}
                onChange={onChangeBronze}></input>
            </li>
        </ul>
        <button onClick={onSubmit}>국가추가</button>
        <button onClick={onChangeUpdate}>업데이트</button>
    </div>
  )
}

export default Input