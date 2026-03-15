import { useState, useEffect } from "react";

import BingoCell from "./BingoCell";
import BingoCenter from "./BingoCenter";

import { buildGrid } from "../utils/generateCards";

import "../styles/bingocard.css"


function BingoCard({card}){

    if (!card) return null

    const [marked, setMarked] = useState(() => {
        const saved = localStorage.getItem("bingoMarks")
        return saved ? JSON.parse(saved) : {}
    })

    useEffect(() => {
        localStorage.setItem("bingoMarks", JSON.stringify(marked))
    }, [marked])

    const toggleCell = (index) => {
        setMarked(prev => ({
            ...prev,
            [index]: !prev[index]
        }))
    }

    const gridCard = buildGrid(card)

    return (
        <div className="bingo-card">
            <div className="flex flex-column pt-4 pb-4 align-items-center justify-content-center">
                <h1 className="m-0 p-0">Bingo Musical</h1>
                <p className="m-0 p-0">de Giuliano</p>
            </div>
            <div className="bingo-letters">
                <div>B</div>
                <div>I</div>
                <div>N</div>
                <div>G</div>
                <div>O</div>
            </div>
            <div className="bingo-grid">
                {
                        gridCard.flat().map((cell, i)=>(
                            cell === "FREE"
                            ? <BingoCenter key={i}/>
                            : <BingoCell 
                                title = {cell.title}
                                author = {cell.author}
                                key={i}
                                marked={marked[i]}
                                toggle={()=>toggleCell(i)}
                            />
                        ))
                }
            </div>
        </div>
    )
}

export default BingoCard