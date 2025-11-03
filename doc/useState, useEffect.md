
# useState, useEffect

## useState

반응형 변수를 생성, 초기값 지정 가능, callback 함수를 통해 lazy 선언도 가능

```javascript
// a, b 는 사실상 같은거임. 비어두면 undefined 가 명시적으로 들어가게 되는 것임.
const [a, setA] = useState()
const [b, setB] = useState(0)

const [c, setC] = useState(() => 10)


```

## useEffect