import React from 'react'

const PageHeader = ({children} : {children: React.ReactNode}) => {
  return (
    <h1 className="ovo m-2 text-5xl ml-6 mb-8">{children}</h1>
  )
}

export default PageHeader