import clsx from "clsx"
import React, { ReactNode } from "react"

export type IconProps = {
  path: ReactNode
  className?: string
}

const Icon = ({ path, className }: IconProps) => {
  return (
    <svg
      className={clsx(className)}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      {path}
    </svg>
  )
}

export default Icon
