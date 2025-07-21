import React from 'react'

const UserLogin = () => {
  return (
    <div>
     <header><h2 class="page-title">User Login</h2>
  <main id="userLogin" class="page-container" style="display:inline-block;">
    <form class="auth-form">
      <label>Email
        <input type="email" placeholder="user@example.com" required />
      </label>
      <label>Password
        <input type="password" placeholder="••••••••" required />
      </label>
      <button type="submit">Login</button>
    </form>
  </main>
  </header>
    </div>
  )
}

export default UserLogin