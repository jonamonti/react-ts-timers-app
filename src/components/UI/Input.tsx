import { forwardRef } from "react"
import { InputT } from "./types"

const Input = forwardRef<HTMLInputElement, InputT>(
  // if we want to pass a reference, we have to use the wrapper function forwardRef
  // its a generic function, it needs 2 types as props:
  // - first, the type of the ref prop. In this example, is HTMLInputElement, as we know we will use it in an input element
  // - second, the props types the element will receive
  ({ label, id, ...props },
    ref) => {
    // if we want to destructure all input props we need to add this to the InputT type
    return (
      <p>
        <label htmlFor={id}>{label}</label>
        <input id={id} name={id} {...props} ref={ref} />
      </p>
    )
  })

export default Input