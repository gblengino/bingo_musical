import { useState } from "react"
import BingoCard from "../components/BingoCard"
import { generateCard } from "../utils/generateCards"

import songs from '../data/songs.json'

function Preview(){

    let card = localStorage.getItem("bingoCard")

    if (card) {
        card = JSON.parse(card)
    } else {
        card = generateCard(songs)
        localStorage.setItem("bingoCard", JSON.stringify(card))
    }

    return (
        <BingoCard card={card}/>
    )
}

export default Preview