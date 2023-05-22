import React, { ReactNode } from 'react'

const classes = {
  container: 'bg-white rounded-lg border border-[#DFE0EB]'
}

export const Card: React.FC<{children: ReactNode, className?: string}> = ({children, className}) => {

  return (
    <div className={`${classes.container} ${className}`}>
      {children}
    </div>
  )
}
