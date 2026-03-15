import { useNavigate } from "react-router"
import { Button } from "primereact/button"

import BingoCard from "../components/BingoCard"
import { generateCard } from "../utils/generateCards"

import songs from '../data/songs.json'

function Bingo(){

    const navigate = useNavigate()

    let card = localStorage.getItem("bingoCard")

    const goHome = () => {
        navigate("/")
    }

    if (card) {
        card = JSON.parse(card)
    } else {
        card = generateCard(songs)
        localStorage.setItem("bingoCard", JSON.stringify(card))
    }

    return (
        <section className="w-full h-screen flex flex-column justify-content-center align-items-center">
            <BingoCard card={card}/>
            <Button label="Volver al Inicio" icon="pi pi-home" className="mt-5" onClick={goHome}/>
        </section>
    )
}

export default Bingo