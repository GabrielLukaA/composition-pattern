import { ComponentProps } from "react"

interface InputAreaProps extends ComponentProps<'div'>{

}

export const InputArea = (props:InputAreaProps) => {
  return (
    <div className="flex justify-between" {...props}/>
  )
}