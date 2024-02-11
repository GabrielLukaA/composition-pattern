import { ComponentProps } from "react"

interface TextFieldProps extends ComponentProps<'input'>{

}

export const TextField = (props:TextFieldProps) => {
  return (


      <input className="rounded-s-md px-2" name={props.name} type="text" {...props} />


  )
}