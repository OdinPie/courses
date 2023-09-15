import { useEffect, useState } from "react";
import Card from "./Card";
const Cards = ({handleCourse}) => {
    const [cards, setCards] = useState([])
    useEffect(()=>{
        fetch('cards.json')
        .then(res=> res.json())
        .then(data=>setCards(data))
    },[])
    return (
        <div className="grid grid-cols-3 gap-5 w-4/5">
            {cards.map((card,idx)=><Card key={idx} handleCourse={handleCourse} card={card}></Card>)}
        </div>
    );
};

export default Cards;