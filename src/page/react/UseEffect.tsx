import { useState, useEffect } from 'react'

export default function UseEffect() {

  const [callCount, setCallCount] = useState(0)
  const [notWatchCount, setNotWatchCount] = useState(0)

  // 1회 호출
  useEffect(() => {

    setCallCount( callCount + 1 )
    console.log('dependencies []')
    
  }, [])

  // 모든 변경에 호출
  useEffect(() => {

    // setCallCount( callCount + 1 )
    console.log('dependencies null')
    document.title = `${callCount}`
    
  })

  // callCount 시 에만 호출
  useEffect(() => {
    console.log('dependencies [callCount]')
    
  }, [callCount])
  
  // notWatchCount 시 에만 호출
  useEffect(() => {

    console.log('dependencies [notWatchCount]')
    
  }, [notWatchCount])

  return (
    <>

      <h1>useEffect</h1>

      <ul>
        <li>dependencies 를 비워둔 경우, 1회 호출, 값이 갱신되어도 호출하지 않는다.</li>
        <li>setCallCount( callCount + 1 ) 절대로 dependencies 대상을 갱신하지 않는다 (무한루프)</li>
        <li>useEffect( fn ) 의 fn 은 Async 사용할 수 없다. fn 내부에서는 가능</li>
      </ul>

      callCount = { callCount }<br />
      <br />
      <button type="button" onClick={ () => setCallCount( callCount + 1 )}>
        callCount 증가
      </button><br />

      <br />
      <br />
      notWatchCount = { notWatchCount }<br />
      <br />
      <button type="button" onClick={ () => setNotWatchCount( notWatchCount + 1 )}>
        notWatchCount 증가
      </button><br />

    </>
  )
}