import React from "react";
import "@/CSS/signup.css";
import store from "@/Store";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function OrganziationSignup() {
  const navigate = useNavigate();
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [phone, SetPhone] = useState("");
  const [college, SetCollege] = useState("");
  const onSubmit = () => {
    console.log("Hello");
    if (name !== "" && email !== "" && phone !== "") {
      axios.post("http://localhost:8000/api/org/signup", {
        Name: name,
        Email: email,
        Wallet: store.getState().wallet,
        Mobile: phone
      }).then((res) => {
        if (res.data) {
          alert("Posted");
          setTimeout(() => {
            navigate("/home");
          }, 1000)
        }
      })
    }
  }
  return (
    <div className="signup-outer">
      <h1>Looks Like you don't have an account</h1>
      <div className="content">
        <h2>Sign Up</h2>


        <div className="field">
          <span className="bx bxs-user"></span>
          <input type="username" placeholder="Name" required value={name} onChange={(e) => { SetName(e.target.value) }} />
        </div>

        <div className="field">
          <span className="bx bxs-envelope"></span>
          <input type="email" placeholder="Email" required onChange={(e) => { SetEmail(e.target.value) }} />
        </div>

        <div className="field">
          <span className="bx bxs-mobile"></span>
          <input type="phone" placeholder="Mobile" required onChange={(e) => { SetPhone(e.target.value) }} />
        </div>
        <p><span style={{
          fontWeight: "bolder"
        }}>Connected Wallet:</span> {store.getState().wallet.slice(0, 6) + "..." + store.getState().wallet.slice(31)}</p>
        <button onClick={() => { onSubmit() }} >Submit</button>
      </div>
    </div>
  )
}
export default OrganziationSignup;