let users = {}

let userDate = {
  register: (email, password) => {
    return new Promise((resolve, reject) => {
      if (users[email]) {
        resolve({
          error: 'E-mail already exist'
        })
        return
      }

      let token = `${email} ${password}`

      users[email] = {
        email: email,
        password: password,
        token: token
      }

      resolve({
        token: token
      })
    })
  },
  login: (email, password) => {
    return new Promise((resolve, reject) => {
      if (!users[email] || users[email].password !== password) {
        resolve({
          error: 'Invalid Credentials'
        })

        return
      }

      let token = `${email} ${password}`

      resolve({
        token: token
      })
    })
  }

}

export default userDate
