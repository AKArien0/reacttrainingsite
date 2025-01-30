import { Link } from 'react-router-dom'
import { useAuth } from '../Auth/AuthProvider'

const Header = () => {
  const { user } = useAuth()

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            {user ? (
              <li>
                <Link to="/logout">Log out</Link>
              </li>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header