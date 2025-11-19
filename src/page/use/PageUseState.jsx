import { useState } from 'react'

export default function PageUseState() {

  // a, b 는 사실상 같은거임. 비어두면 undefined 가 명시적으로 들어가게 되는 것임.
  const [a, setA] = useState()
  const [b, setB] = useState(0)

  // 지연초기화
  const [c, setC] = useState(() => 10)


  return (
    <>
      <h1>useState</h1>

      <ul>
        <li>
          setVar 사용 시 얕은 비교를 사용하기 때문에, 병합 형태로 지정해야 watch 됨.<br />
          즉 Object 를 그냥 넣으면, 갱신내용을 인식하지 못한다.
          ex) setVar( {'{'} ...user {'}'}, name: 'John' )
        </li>
      </ul>

      <button type="button" className="item" onClick="{ () => setA( a + 1 ) }">
          a = { typeof a }
      </button>

      <div className="item">
          b = { b }
      </div>

      <div className="item">
          c = { c }
      </div>

    </>
  )
}