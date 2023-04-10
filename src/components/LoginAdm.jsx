import { AppContext } from '@/context/AppContext';
import Link from 'next/link';
import React, { useContext } from 'react'

export default function LoginAdm() {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const { showLogin} = useContext(AppContext);


  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'email') {
      setEmail(value)
    } else if (name === 'password') {
      setPassword(value)
    }
  }

  const validInput = () => {
    if (email === '' || password === '') {
      return false
    }
    return true
  }

  return (
    <div>
    {
      showLogin && 
      <form className='loginForm'>
      <h1>Login</h1>
      <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" onChange={ handleChange } />
      <label htmlFor="password">Senha</label>
        <input type="password" name="password" id="password" onChange={ handleChange } />
      <Link href="/admPage">
      <button
      type="submit"
      disabled={ !validInput() }
      >Entrar</button>
      </Link>
      </form>
    }
    </div>
  )
}
