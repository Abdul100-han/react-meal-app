import React from 'react'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'

const style = {
    button: `bg-gray-200 px-4 py-2 hover:bg-gray-100`
}



const LogOut = () => {

    const SignOut = () => {
        signOut(auth)
        
    }

  return (
    <div>
        <button className={style.button} onClick={() => auth.signOut()}>
            Logout
        </button>
    </div>
  )
}

export default LogOut