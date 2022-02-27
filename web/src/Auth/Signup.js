import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, signUp } from '../firebase'
import './Signup.css'
import { Button, Card, CardContent, Typography } from '@mui/material'

function SignupForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [name, setName] = useState('')
  const [user, loading] = useAuthState(auth)
  const navigate = useNavigate()

  // checking sign up information
  const signup = () => {
    if (!name) {
      alert('Please enter name')
    } else if (password !== passwordConfirmation) {
      alert("Passwords don't match")
    } else {
      signUp(name, email, password)
    }
  }

  useEffect(() => {
    // if it's loading trigger a loading screen
    // go back to home page after signup successfully
    if (loading) return
    if (user) navigate('/', { replace: true })
  }, [user, loading, history])

  return (
    <div className='signup'>
      <Card variant='outlined'>
        <CardContent>
          <Typography variant='h1' color='primary'>
            Sign Up
          </Typography>
          <div className='signupText'>Full Name</div>
          <input
            type='text'
            className='signupTextBox'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='John Doe'
          />
          <div className='signupText'>Email</div>
          <input
            type='text'
            className='signupTextBox'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='email@email.com'
          />
          <div className='signupText'>Password</div>
          <input
            type='password'
            className='signupTextBox'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
          />
          <div className='signupText'>Password Confirmation</div>
          <input
            type='password'
            className='signupTextBox'
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            placeholder='Password'
          />
          <div
            style={{
              fontSize: '12px',
              marginTop: '0px',
              marginBottom: '10px',
            }}
          >
            Use 6 or more characters with letters, numbers & symbols
          </div>

          <Button variant='contained' onClick={signup}>
            Sign Up
          </Button>
          <div>
            Already have an account? <Link to='/login'>Login</Link> now.
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default SignupForm
