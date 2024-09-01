import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const Register = () => {
  const navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("")
  const [confirmPass, setConfirmPass] = useState("");

  const validate = async (e) => {
    e.preventDefault();

    const isValid = mail.includes('@') && pass.length > 6 && pass === confirmPass;
    if (!isValid) {
      alert('Enter valid email or password');
      return;
    }

    try {


      const response = await fetch(`http://localhost:8000/users?email=${mail}`);
      const users = await response.json();
      console.log(users)
      if (users.length > 0) {
        toast.warning("User already exists");
        navigate("/signIn");
        return;
      }

      const newUser = { email: mail, password: pass, Name: name, cart: [] };
      await fetch("http://localhost:8000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      toast.success("Registration successful")
      navigate("/signIn");
    } catch (error) {
      console.error("Error:", error);
      toast.warning("Failed to register. Please try again.");
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="card-title text-center mb-4">REGISTER</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="passwrd"
              placeholder="Confirm your password"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100" onClick={validate}>Submit</button>
        </form>
      </div>
    </div>
  )
}