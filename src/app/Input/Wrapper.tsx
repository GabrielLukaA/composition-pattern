import { ComponentProps } from "react"

interface WrapperProps extends ComponentProps<'div'>{

}

export const Wrapper = (props:WrapperProps) => {
  return (


    <div className="flex flex-col gap-1" {...props} />


  )
}