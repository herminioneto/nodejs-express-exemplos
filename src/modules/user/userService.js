let users = []

const getUserByEmail = (searchEmail) => {
  return users.find((obj) => obj.email === searchEmail)
}

export const signup = (data) => {
  if (getUserByEmail(data.email)) throw new Error('email_inexistente')
    
  users.push(data)
  return true
}