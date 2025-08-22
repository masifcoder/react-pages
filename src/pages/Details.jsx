
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function Details() {
    const [product, setProduct] = useState(null);

    const params = useParams();

    console.log(params.id);


    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then(response => response.json())
            .then(data => setProduct(data));


    }, [])

    return (
        <div id='detailsPage'>
            {
                (product !== null) ? <div className="card">
                    <img src={product.image} className="card-img-top" alt="..." style={{ height: "200px", objectFit: "cover"}} />
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                </div> : null
            }
        </div>
    )
}

export default Details