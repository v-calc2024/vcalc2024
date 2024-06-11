import { iUseInputText } from "@/models/useInputText"
import { useState } from "react"

export function useInputText ({ validation, clearError }: iUseInputText) {
  const [error, setError] = useState<string>('')

  async function blur(event: React.FocusEvent<HTMLInputElement, Element>) {
    const errorMessage = await validation(event.target.value)
    setError(errorMessage)
  }

  function clearInputError () {
    setError('')
    clearError()
  }

  return { error, blur, clearInputError }
}
