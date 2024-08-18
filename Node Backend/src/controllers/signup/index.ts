import { Request, Response } from "express"
import { userSave } from "../../modules/user";
export const signup = ((req:Request, res:Response) => {
  try {
    const { email, password } = req.body;
    try {
      userSave(email, password);
    } catch (error) {
      console.error("Data Entry for signup is failed: Signup failed")
    }

    res.status(201)
      .json({ success: true })
  } catch (error) {

    res.status(400)
      .json({ succsess: false })
  }
})