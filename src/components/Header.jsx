import { AppContext } from '@/context/AppContext'
import { useContext } from 'react'
import { RiAdminLine } from 'react-icons/ri'


export default function Header() {
  const {setShowLogin, showLogin} = useContext(AppContext);

  const handleLogin = () => {
    setShowLogin(!showLogin)
  }

  return (
    <header>
      <h1><span>WS</span> shop!</h1>
      <RiAdminLine
        className='admIcon'
        onClick={ handleLogin }
      />
    </header>
  )
}
