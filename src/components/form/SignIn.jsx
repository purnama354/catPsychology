import { useState } from "react"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import app from "../../firebase/firebaseConfig"
import "./SignIn.css"

const defaultFormFields = {
  email: "",
  password: "",
}

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)

  const handleFormFields = (e) => {
    setFormFields({
      ...formFields,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (typeof formFields.email !== "string" || formFields.email.length < 1) {
      alert("Email is required")
      return
    }

    const auth = getAuth(app)
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        formFields.email,
        formFields.password
      )

      console.log(response)
    } catch (error) {
      // console.log(error)
      alert(error.message)
    }
    setFormFields(defaultFormFields)
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={handleFormFields} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={handleFormFields} />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Login</button>
        </div>
      </form>
    </div>
  )
}

export default SignIn
