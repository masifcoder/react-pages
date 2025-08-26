

import React from 'react'

const Card = ({title, children}) => {
    return (
        <div class="card" style={{ width: "18rem" }}>
            
       

            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>

                 {children}
        </div>
    )
}

export default Card 