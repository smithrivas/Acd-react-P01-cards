import { useState } from "react";

const Card = ({data})=>{   
    const randomIndex = Math.floor(Math.random() * data.length);    
    const [random, setRandom] = useState(randomIndex)
    const{name, email, phone} = data[random]
    const randomNumber = ()=>{
        setRandom(Math.floor(Math.random() * data.length))
    }        
    return(
        <div> 
            <h2>{`${name.title} ${name.first} ${name.last}`}</h2>            
            <img src={`${data[random].picture.large}`} alt="" />
            <p>{email}</p>
            <p>{phone}</p>
            <p>{`${data[random].location.country} ${data[random].location.state} ${data[random].location.city}`}</p>
            <button onClick={()=>randomNumber()}>Random</button>         
        </div>
    )
}

export default Card