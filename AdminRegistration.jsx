import React from 'react'

const AdminRegistration = () => {
  return (
    <div>
    
  <header><h2 class="page-title">Admin Registration</h2>
  <main id="adminRegister" class="page-container" style="display:inline-block;">
    <form class="auth-form">
      <label>Admin Code
        <input type="text" placeholder="Secret Code" required />
      </label>
      <label>Username
        <input type="text" placeholder="username" required />
      </label>
      <label>Password
        <input type="password" placeholder="Create a password" required />
      </label>
      <button type="submit">Register</button>
    </form>
  </main>
  </header>
    </div>
  )
}

export default AdminRegistration