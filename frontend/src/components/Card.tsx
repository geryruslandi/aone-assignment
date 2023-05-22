import React, { ReactNode } from 'react'

const classes = {
  container: 'bg-white rounded-lg border border-[#DFE0EB]'
}

export const Card: React.FC<{children: ReactNode}> = ({children}) => {

  return (
    <div className={classes.container}>
      {children}
    </div>
  )
}
