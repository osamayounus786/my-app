


function Card(props){
    
    let badgeText;
    if(props.openSpots === 0){
        badgeText = "SOLD OUT"
    }
    else if(props.showPresence === "Online"){
        badgeText = "ONLINE"
    }
    return(
        <>
        
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={props.img} alt="wedding" className='card-img' />
            <div className='card-stats'>
                <img src={props.imgicon} alt="rating star" />
                <span>{props.rating}</span>
                <span className='gray'>{props.number}</span>
                </div>
                <p>{props.para}</p>
                <p><span className='bold'>{props.para2}</span> / peroson</p>
            
        </div>
        </>
    )
}

export default Card;