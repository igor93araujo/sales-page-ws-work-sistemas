import { AppContext } from '@/context/AppContext'
import { useContext, useEffect, useState } from 'react'
import { RiAdminLine } from 'react-icons/ri'
import { CgMenuLeftAlt } from 'react-icons/cg'
import { AiOutlineClose } from 'react-icons/ai'


export default function Header() {
  const {setShowLogin, showLogin, setShowCategories, showCategories, showMenu, setShowMenu } = useContext(AppContext);
  

  const handleLogin = () => {
    setShowLogin(!showLogin)
  }

  const handleMenu = () => {
    window.innerWidth <= 800 && setShowMenu(!showMenu)
  }

  const handleShowCategories = () => {
    setShowCategories(!showCategories)
  }
  
  useEffect(() => {
    handleMenu();
  }, [])


  return (
    <header>
      {
        showMenu && (
          <div className='menu'>
            {
              showCategories ? (
                <AiOutlineClose
                  className='menuIcon'
                  onClick={ handleShowCategories }
                />
              ) : (
                <CgMenuLeftAlt 
                  className='menuIcon'
                  onClick={ handleShowCategories }
                />
              )
            }
          </div>
        )
      }
      <h1><span>WS</span> shop!</h1>

      <RiAdminLine
        className='admIcon'
        onClick={ handleLogin }
      />
    </header>
  )
}
