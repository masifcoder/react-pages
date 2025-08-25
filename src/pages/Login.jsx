import { useState } from "react"
import { useNavigate } from "react-router-dom";



const Login = () => {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [error, setError] = useState(false);

    const navigator = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (email == "admin@gmail.com" && pwd == "123") {
            localStorage.setItem("isLogin", "yes");

            navigator("/dashboard");
        } else {
            setError("incorrect credentials");
        }
    }

    return (
        <>
            <form onSubmit={handleLogin}>
                <h3 className="text-center">Login Form</h3>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <input type='text' className="form-control mb-3" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" className="form-control mb-3" value={pwd} onChange={(e) => setPwd(e.target.value)} />

                        {error && <div className="alert alert-danger">
                            {error}
                        </div>
                        }

                        <button className="btn btn-warning btn-sm">Login</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Login