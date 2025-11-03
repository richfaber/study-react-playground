import { useState } from 'react'

export default function PageUseState() {

  // a, b 는 사실상 같은거임. 비어두면 undefined 가 명시적으로 들어가게 되는 것임.
  const [a, setA] = useState()
  const [b, setB] = useState(0)

  const [c, setC] = useState(() => 10)

  return (
    <>
      <h1>useState</h1>

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