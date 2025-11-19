import { useNavigate } from 'react-router-dom'

function UseNavigate() {

    const navigate = useNavigate();
    const handleLogin = () => {
        // 라우터 이동
        navigate('/dashboard')
    }

    return <button onClick={ handleLogin }>Login</button>
}

export default UseNavigate