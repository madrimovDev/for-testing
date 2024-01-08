import { FormEvent } from "react"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SubmitHandlerCallback = (data: any) => void

type SubmitHandler = (callback: SubmitHandlerCallback) => (event: FormEvent<HTMLFormElement>) => void | Promise<void>

export const submitHandler: SubmitHandler = (callback) => {
  return (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData.entries())
    callback(data)
  }
}