import { useNavigate } from "react-router-dom"

export default function HomeComponent() {
    const navigate = useNavigate()

    const handleButtonClick = () => {
        navigate('/about')
    }
    return (
        <div>
            <h1>
                Home Component
            </h1>
            <button onClick={handleButtonClick}>Go to About</button>
        </div>

    )
}