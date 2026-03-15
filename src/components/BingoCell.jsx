import { useState } from "react";

import "../styles/bingocard.css"

function BingoCell({title, author, marked, toggle}){
    const [animation, setAnimation] = useState("")

    const handleClick = () => {
        setAnimation(marked ? "unmark" : "mark")
        toggle()
        setTimeout(() => setAnimation(""), 400)

    }

    return (
        <div className={`bingo-cell ${marked ? "marked" : ""} ${animation}`} style={{overflowWrap: "break-word"}} 
        onClick={handleClick}>
            <h3 className="w-full m-0 px-2" style={{fontSize: 10}}>{title}</h3>
            <p className="w-full m-0 px-2" style={{fontSize: 8}}>{author}</p>
        </div>
    )
}

export default BingoCell