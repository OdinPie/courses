import { useEffect, useState } from "react";
import Card from "./Card";
const Cards = () => {
    const [cards, setCards] = useState([])
    useEffect(()=>{
        fetch('cards.json')
        .then(res=> res.json())
        .then(data=> console.log(setCards(data)))
    },[])
    return (
        <div className="grid grid-cols-3 gap-5">
            {cards.map(card=><Card card={card}></Card>)}
        </div>
    );
};

export default Cards;