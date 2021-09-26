import React ,{useState} from 'react'
import '../assets/css/Contactus.css'
import {useHistory} from "react-router"
function Contactus() {
    const history=useHistory();
    const [flag,setFlag]=useState(true);
    const handleclick=()=>{
        alert("Our team would soon contact You !")
        history.push('/')
    }
    const onchange=()=>{
        setFlag(false)
    }
    return (
        <div class="outerdiv">
            <div class="outer">
                <h2> Contact Us </h2>
                <form action="">
                    <div class="form-group">
                        <label for="name">Full Name</label>
                        <input type="text" name="Name" id="name" onChange={onchange} placeholder="First and Last" required minlength="3" maxlength="25" />
                    </div>
                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" name="Email" id="email" onChange={onchange} placeholder="email@gmail.com" required />
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea name="Message" id="message" rows="5" placeholder="Type your message here...."></textarea>
                    </div>
                    <div class="form-group">
                        <button type="submit" onClick={handleclick} disabled={flag} class="submit"><i class="far fa-paper-plane"></i>Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contactus
