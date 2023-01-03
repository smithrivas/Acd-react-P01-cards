import { useState } from "react";

const Card = ({data})=>{   
    const randomIndex = Math.floor(Math.random() * data.length);    
    const [random, setRandom] = useState(randomIndex)
    const{name, email, phone} = data[random]
    const randomNumber = ()=>{
        setRandom(Math.floor(Math.random() * data.length))
    }    
    const colors = ["#FDB137", "#785964", "#6D6875", "#B5838D", "#E5989B", "#7E9680", "#C73866", "#FFB4A2", "#79616F", "#EAB595" ]
    document.body.style = `background-color: ${colors[random]}; color: ${colors[random]}`;        
    const divStyle = {
        color: `${colors[random]}`
    }
    return(
        <div className="card"> 
            <div className="dataCard">
                <h1>{`${name.title} ${name.first} ${name.last}`}</h1>            
                <img src={`${data[random].picture.large}`} alt="" />
                <p><i className='bx bxs-envelope'></i> {email}</p>
                <p><i className='bx bxs-phone' ></i> {phone}</p>
                <p><i className='bx bxs-map' ></i> {`${data[random].location.country} ${data[random].location.state} ${data[random].location.city}`}</p>
            </div>
            <div className="button">
                <button onClick={()=>randomNumber()}><i style={divStyle} className='bx bx-transfer' ></i></button>         
            </div>
        </div>        
    )
}

export default Card