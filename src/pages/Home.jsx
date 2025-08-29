
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";
import ProtectedRoutes from "../components/ProtectedRoutes";


function Home() {
  return (
    <div id="homePage">
        <div>
          
          {/* <Card title="my title">
              <h3>This is passed by children</h3>
              <Button />
          </Card> */}

          {/* <ProtectedRoutes>
            <Card title="testing">
              <Button />
            </Card>
          </ProtectedRoutes>
             */}

             <div className="bg-red-400 w-20 text-xl rounded-4xl hover:bg-amber-800 md:bg-amber-200">This is testing</div>
            
            <h3 className="bg-[#1d4ed8]">Product 1</h3>
            <Link to='/products/1' className="text-4xl text-red-600">View</Link>
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

