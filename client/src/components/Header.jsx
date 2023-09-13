import { useEffect } from 'react'
import PropTypes from 'prop-types';
import Navbar from './Navbar'
import { useUserContext } from '../utils/UserContext'

export default function Header(props) {
  // You can access props.isAuthenticated to get the value
  const isAuthenticated = props.isAuthenticated;
  const { currUser } = useUserContext() 
  console.log(currUser)

  useEffect(() => {
    console.log(currUser)
  }, [currUser])

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} />
    </>
  )
}

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};