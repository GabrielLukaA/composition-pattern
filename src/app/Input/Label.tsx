import { ComponentProps } from "react"

interface LabelProps extends ComponentProps<'label'>{
description:string
}

export const Label = ({description, ...props}:LabelProps) => {
  return (
    <label className="text-white" htmlFor="name"  {...props}>
    {description}
  </label>
  )
}