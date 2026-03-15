import { useNavigate } from "react-router"

import { Button } from "primereact/button"

function Home() {

    const navigate = useNavigate()

    const card = localStorage.getItem("bingoCard")

    const newBingo = () => {
        localStorage.removeItem("bingoCard")
        localStorage.removeItem("bingoMarks")
        navigate("/bingo")
    }

    const continueBingo = () => {
        navigate("/bingo")
    }

    return (
        <section className="w-full flex flex-column justify-content-center align-items-center" style={{height: "70vh"}}>
            <h1 className="m-0">Bingo Musical</h1>
            <p className="mt-2">de Giuliano Blengino</p>
            <span className="pi pi-gift text-4xl mt-2"></span>
            <Button label="Generar nueva tarjeta" onClick={newBingo} className="mt-4"></Button>
            {card ? 
                <Button label="Continuar con tarjeta existente" onClick={continueBingo} className="mt-2"/>
            : null}
        </section>
    )
}

export default Home