import { Routes, Route, Link, useLocation } from "react-router-dom"

import SignIn from "../../components/form/SignIn"

const AdminDashboard = () => {
  const location = useLocation()
  return (
    <>
      <nav>
        <ul>
          {location.pathname !== "/admin/signin" && (
            <li>
              <Link to="/admin/signin">Sign In</Link>
            </li>
          )}
        </ul>
      </nav>
      <Routes>
        <Route path="/admin/signin" element={<SignIn />} />
      </Routes>
    </>
  )
}

export default AdminDashboard
