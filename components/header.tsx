
'use client'
import { signOut } from "next-auth/react";



function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5 bg-blue-950/75">
        <div className="flex items-center space-x-2 ">
            <h1>Welcome to Blog AI</h1>
        </div>

        <div>
            <button className="login-button bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded"
            onClick={() => signOut()}>
                Log Out
            </button>
        </div>
    </header>
  )
}

export default Header