import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AuthorForm = () => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const handleSubmit = (e) => {
    e.preventDefault();
    axios
        .post("http://localhost:8000/api/author", { name })
        .then((response) => {
        console.log(response);
        navigate("/");
        })
        .catch((err) => {
        console.log(err.response.data.err.errors);
        setErrors(err.response.data.err.errors);
        });
    };
    return (
    <div>
        <div>
        <div>
            <Link to="/">Home</Link>
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
                {errors.name ? <p>{errors.name.message}</p> : null}
            </div>
            <button type="submit">Submit</button>
            </form>
        </div>
        </div>
    </div>
    );
};

export default AuthorForm;