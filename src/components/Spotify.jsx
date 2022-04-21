import React ,{useState}from 'react'

const Spotify = () => {
    let [state,setState]=useState({
        email:"",
        password:"",
        profile_name:"",
        yyy:"",
        month:"",
        day:"",
        male:"",
        female:"",
        others:"",
        check1:"",
        check2:"",
        check3:"",
    })
    let handleState=(e)=>{
        setState({[e.target.name]:e.target.value})
    }
  return (
    <section>
        <article>
            <form action="">
                <h1>Sign up for free to start listening.</h1>
                <div className="flexor">
                    
                <div className='flexol'>

                </div>
                <div className="flexor1">
                    <p>or</p>
                </div>
                <div className='flexol'>

                </div>
                    
                </div>
                <div className="form-group">
                    <label>What's your email?</label><br />
                    <input type="email" name="email" placeholder="Enter the Email" value={state} id="email1"></input>
                    <p><a href="">Use phone number insted.</a></p>
                </div>
                <div className="form-group">
                <label>Confirm your email
</label><br />
                    <input type="email" name="email" placeholder="Enter the Email" value={state} id="email1"></input>
                </div>
                <div className="form-group">
                <label>Create a Password</label><br />
                    <input type="password" name="password" placeholder="Enter the Password" value={state} id="pasword"></input>
                </div>
                <div className="form-group">
                <label>What should we call you?</label><br />
                    <input type="text" name="text" placeholder="Enter the Profile Name" value={state} id="text1"></input>
                    <p>This appears on your profile.</p>
                </div>
                <h4>What's your date of birth?</h4>
                <div className="form-group1">
                    <label htmlFor="">Year</label>
                    <input type="number" name="year" id="year" />
                </div>
                <div className="form-group1" onChange={handleState}>
                    <label htmlFor="">Month</label>
                    <select name="month" id="month">Month</select>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                </div>
                
                <div className="form-group1">
                    <label htmlFor="">Day</label>
                    <input type="number" name="day" id="day" />
                </div>
                <h4>What's your gender?</h4>
                <div className="form-group2">
                    
                    <input type="radio" name="Male" id="male" />
                    <label htmlFor="">Male</label>
                </div>
                <div className="form-group2">
                    
                    <input type="radio" name="Male" id="male" />
                    <label htmlFor="">Female</label>
                </div>
                <div className="form-group2">
                    
                    <input type="radio" name="Male" id="male" />
                    <label htmlFor="">Non-binary</label>
                </div>
                <div className="form-group">
                    <input type="checkbox" name="c1" id="c1" />
                    <label htmlFor="">I would prefer not to receive marketing messages from Spotify</label>
                    <input type="checkbox" name="c1" id="c1" />
                    <label htmlFor="">Share my registration data with Spotify's content providers for marketing purposes.</label>
                   
                    
                </div>
                <div className='Robort'>
                    <input type="checkbox" name="to" id="to" />
                    <label htmlFor="">
                        i'm not a robot
                    </label>

                </div>
                <p>By clicking on sign-up, you agree to Spotify's <a href="">Terms and Conditions of Use.</a></p>
                <p>To learn more about how Spotify collects, uses, shares and protects your personal data, please see  <a href="">Spotify's Privacy Policy.</a> </p>
            </form>
        </article>
    </section>
  )
}

export default Spotify