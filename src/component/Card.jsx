import { useState } from "react";

const Card = ({data})=>{   
    const randomIndex = Math.floor(Math.random() * data.length);    
    const [random, setRandom] = useState(randomIndex)
    const{name, email, phone} = data[random]
    const randomNumber = ()=>{
        setRandom(Math.floor(Math.random() * data.length))
    }
    const colors = [
        "#ff7e5fc7",
        "#77ff5f",
        "#ff605f",
        "#f15fff",
        "#55d0ff80",
        "#4b54fff7",
        "#ffe835",
        "#35e9ffcc",
        "#a506b4b5",
        "#29d500b8"
    ]
    document.body.style = `background-color: ${colors[random]}`;        
    return(
        <div className="card"> 
            <div className="dataCard">
                <h1>{`${name.title} ${name.first} ${name.last}`}</h1>            
                <img src={`${data[random].picture.large}`} alt="" />
                <p><i class='bx bxs-envelope'></i> {email}</p>
                <p><i class='bx bxs-phone' ></i> {phone}</p>
                <p><i class='bx bxs-map' ></i> {`${data[random].location.country} ${data[random].location.state} ${data[random].location.city}`}</p>
            </div>
            <div className="button">
                <button onClick={()=>randomNumber()}><i className='bx bx-transfer' ></i></button>         
            </div>
        </div>
        
    )
}

export default Card