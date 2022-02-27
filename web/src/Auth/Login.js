import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, signIn, signInWithGoogle } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import GoogleButton from 'react-google-button'
import './Login.css'
import { Button, Card, CardContent, Typography } from '@mui/material'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, loading] = useAuthState(auth)
  const navigate = useNavigate()

  useEffect(() => {
    // if it's loading trigger a loading screen
    // go back to home page after login successfully
    console.log(user)
    if (loading) {
      console.log('loading')
      return
    }
    if (user) {
      console.log('replace')
      console.log(history)
      // history.replace('/home')
      navigate('/', { replace: true })
    }
  }, [user, loading, history])

  return (
    <div className='login'>
      <Card variant='outlined'>
        <CardContent>
          <Typography variant='h1' color='primary'>
            Log In
          </Typography>
          <div className='signupText'>Email</div>
          <input
            type='text'
            className='loginTextBox'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='email@email.com'
          />
          <div className='signupText'>Password</div>
          <input
            type='password'
            className='loginTextBox'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
          />
          <Button variant='contained' onClick={() => signIn(email, password)}>
            Login
          </Button>

          <GoogleButton
            style={{ width: '300px', marginBottom: '10px' }}
            type='light'
            onClick={signInWithGoogle}
          />

          <div>
            <Link
              to='/reset'
              style={{
                textDecoration: 'none',
                color: '',
              }}
            >
              Forgot Password?
            </Link>
          </div>
          <div>
            Do not have an account?{' '}
            <Link
              to='/signup'
              style={{
                textDecoration: 'none',
              }}
            >
              Sign Up
            </Link>{' '}
            now.
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default LoginForm
