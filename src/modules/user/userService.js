let users = [
  {
    email: "herminio@exemplo.com"
  },
  {
    email: "outro@exemplo.com"
  }
]

const getUserByEmail = (searchEmail) => {
  return users.find((obj) => obj.email === searchEmail)
}

export const signup = (data) => {
  if (getUserByEmail(data.email)) {
    console.log("EXISTE O EMAIL")
  } else {
    users.push(data)
  }
  return true
}