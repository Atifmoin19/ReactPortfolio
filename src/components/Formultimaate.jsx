import React,{useState, useRef} from 'react';
import emailjs from '@emailjs/browser';

const Formultimaate = () => {
    const [FullName,setFullName] = useState({
        fname:"",
        lname:"",
        email:"",
    });
    
    const form = useRef();
    const inputEvent=(event)=>{
        const {value,name} = event.target;
        setFullName((preValue)=>{
            return{
                ...preValue,
                [name]:value,
            };
        })
    
    }

    const sendEmail=(event)=>{
        event.preventDefault();
        emailjs.sendForm('Portfolio_msg', 'template_j7msv8c', form.current, 'user_lOVyWwC9xWmzokD0pkxNB')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        alert(" Thanks " + FullName.fname + " " + FullName.lname + "  For subbmitting form")
        event.target.reset();
        event.targe.value.reset();

    }


    return (
        <>
        <div className='HeadingForm'>
            <h1>FEEDBACK FORM</h1>
        </div>
        <div className='Form' id='Feedback'>
        
        <form ref={form} onSubmit={sendEmail}>
        <div className='input'>
    
            <p/>
            <div className='inputbox'>
            <span>
            <label htmlFor="fname"> First Name </label>
            </span>
            <br/>
            <input type="text"  name = "fname" onChange={inputEvent} />
            </div>
            <br/>
            <div className='inputbox'>
            <span>
            <label htmlFor="lname"> Last Name </label>

</span>  
<br/>
          <input type="text" name = "lname" onChange={inputEvent} />
            </div>
            <br/>
            <div className='inputbox'>
            <span>
            <label htmlFor="email"> Email</label>
    
    </span>  
    <br/>
          <input type="email" name = "email" onChange={inputEvent}/>
            </div>
            <div className='inputbox'>
            <span>
            <label htmlFor="message"> Feedback</label>
    
    </span>        
    <br/>
           <textarea name="message"/>
            </div>
            <br/>
            <button type="submit" value="Send">click</button>
        </div>
        </form>
        </div>
        </>
    );
}

export default Formultimaate;

