import React, { useEffect, useState } from 'react'
import AlertBox from './AlertBox';
import Spinner from './Spinner';
const Contact = () => {
    const [spinner, setSpinner]  = useState(false)
    const Url = 'https://portfolio-vqy0.onrender.com/msg';
    const [alert, setAlert] =  useState(false) 
    const [message, setMessage] = useState({
        name: '',
        email: '',
        number: '',
        sub: '',
        msg: ''
    })
    const onChangeData = (e) => {
        setMessage({ ...message, [e.target.name]: e.target.value })
    }
    const submitForm = async (e) => {
        setSpinner(true);
        e.preventDefault()
        let data = await fetch(Url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: message.name, email: message.email, number: message.number, sub: message.sub, msg: message.msg })
        })
        data = await data.json();
        if (data.success === true) {
           setMessage({
            name: '',
            email: '',
            number: '',
            sub: '',
            msg: ''
           })
           setAlert(true);
        }
        setSpinner(false);
    }
    useEffect(()=>{
        setTimeout(() => {
            setAlert(false)
        }, 3000);
    },[alert])
    return (
        <>
            <div id="contact"></div>
            <section>
                <div className="contact-heading">
                    <h1>Contact <span> Me</span></h1>
                   {alert && <AlertBox setalert =  {setAlert}/>}
                    <div className="contactfrom">
                        <form action = '' onSubmit={submitForm}>
                            <input type="text" autoComplete='off' name="name" id="name" placeholder="Name" value={message.name} onChange={onChangeData} minLength={2} maxLength={20} />
                            <input type="email" autoComplete='off' name="email" id="email" placeholder="Email" value={message.email} onChange={onChangeData} />
                            <input type="text" autoComplete='off' name="number" id="number"
                                placeholder="Number"  value={message.number} onChange={onChangeData} minLength={10} maxLength={10} />
                            <input type="text" autoComplete='off' name="sub" id="sub" placeholder="Subject" value={message.sub} onChange={onChangeData} />
                            <textarea name="msg" autoComplete='off' id="msg" cols="20" rows="10" placeholder="Message" value={message.msg} onChange={onChangeData}></textarea>
                            <button className="submit-form" onSubmit={submitForm}>Submit</button>
                            {spinner && <Spinner/>}
                        </form>
                    </div>

                </div>
            </section>
        </>
    )
}
export default Contact;