import { useState } from 'react'
import '../styles/subscribe.css'

const Subscribe = () => {
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')

    //handle event on submit
    const handleFormSubmit = (e: React.FormEvent) => {

    }

    //update email value
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    //update name value
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value)
    }
    return (
        <div>
            <h1>
                Join to Get Updates from us!
            </h1>
            <form className="form-sub" onSubmit={handleFormSubmit}>


                <br />
                <label>First Name</label>
                <br />
                <input
                    name="fname"
                    placeholder="Your first name..."
                    type="text"
                    onChange={handleNameChange}
                    value={firstName}
                />
                <br /><br />
                <label>Email</label>
                <br />
                <input
                    name="email"
                    placeholder="Your email address..."
                    required
                    type="email"
                    onChange={handleEmailChange}
                    value={email}
                />
                <br /><br /><br />
                <button>Subscribe</button>
                <br /><br />
                <br /><br />
            </form>
        </div>
    )
}
export default Subscribe