import { type FC } from "react";
import { ButtonT } from "./types";

const Button: FC<ButtonT> = (props) => {
  if (props.el === "anchor") {
    return <a className="button" {...props}>Link</a>
  }

  return (
    <button className="button" {...props}></button>
  )
}

export default Button;