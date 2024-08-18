import { UserSignup } from "../../models/signup";

export const userSave = (email: string, password: string) => {
  try {
    if (email && password) {
      UserSignup.create({
        email: email,
        password: password
      })
    }
  } catch (error) {
    console.error("Data Entry for signup is failed")
  }
}