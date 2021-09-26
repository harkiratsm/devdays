import React, { useEffect,useContext } from 'react'
import Sawo from 'sawo'
import { useHistory } from 'react-router';
import { LoginContext , PayloadContext} from '../App'
import '../assets/css/Login.css'
function Login() {
    const history=useHistory();
    const {setPayload}=useContext(PayloadContext)
    const {setUser}=useContext(LoginContext)
    useEffect(() => {
        var config = {
            // should be same as the id of the container created on 3rd step
            containerID: 'sawo-container',
            // can be one of 'email' or 'phone_number_sms'
            identifierType: 'phone_number_sms',
            // Add the API key copied from 5th step
            apiKey: "e1c9fa99-b4a8-452c-93b1-48c2c34fd884",
            // e1c9fa99-b4a8-452c-93b1-48c2c34fd884
            // 74d591cc-9576-43ef-b3a8-d449236ddb9b
            //bc4f983a-a8d7-4410-80b5-a7fb6875efe9
            // Add a callback here to handle the payload sent by sdk
            onSuccess: payload => {
                // you can use this payload for your purpose
               setUser(true)
               localStorage.setItem("auth", JSON.stringify(payload))
               setPayload(payload)
               history.push("/")
            },
        }
        let sawo = new Sawo(config)
        sawo.showForm()
    }, [setUser,history,setPayload])
    
    return (
        <div className="login">
            <div>
                <div id="sawo-container" style={{height: "300px", width: '300px'}}></div>
            </div>
        </div>
    )
}

export default Login;
