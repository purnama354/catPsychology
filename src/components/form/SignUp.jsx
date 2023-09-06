import { useState } from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import app from "../../firebase/firebaseConfig"

const defaultFormFields = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
}

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)

  const handleFormFields = (e) => {
    setFormFields({
      ...formFields,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (formFields.password.length < 6) {
      alert("Password must be at least 6 characters")
      return
    }

    if (formFields.password !== formFields.confirmPassword) {
      alert("Passwords don't match")
      return
    }

    const auth = getAuth(app)
    try {
      const response = await createUserWithEmailAndPassword(
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
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <div className="input-field">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" onChange={handleFormFields} />
        </div>
        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" onChange={handleFormFields} />
        </div>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={handleFormFields} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={handleFormFields} />
        </div>
        <div className="input-field">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            onChange={handleFormFields}
          />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
        </div>
      </form>
    </div>
  )
}

export default SignUp
