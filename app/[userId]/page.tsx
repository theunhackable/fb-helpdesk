import React from 'react'

const UserPage = ({params: {userId}}:{params:{userId: string}}) => {
  return (
    <>
    <h1 className='text-2xl font-bold'>Your Profile details</h1>
    </>
  )
}

export default UserPage