import React from 'react'

//Container is just a wrapper component that can be used to wrap other components and provide them with some common styles or functionality. It can be used to create a consistent layout for the application and to avoid code duplication.
function Container({children}) {
  return (
    <div className='w-full max-w-7xl mx-auto px-4'>
        {children}
    </div>
  )
}

export default Container