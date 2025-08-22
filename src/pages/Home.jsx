
import { Link } from "react-router-dom";


function Home() {
  return (
    <div id="homePage">
        <div>
            <h3>Product 1</h3>
            <Link to='/products/1'>View</Link>
        </div>
         <div>
            <h3>Product 2</h3>
            <Link to='/products/2'>View</Link>
        </div>
         <div>
            <h3>Product 3</h3>
            <Link to='/products/3'>View</Link>
        </div>
    </div>
  )
}

export default Home

