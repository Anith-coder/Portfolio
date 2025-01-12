import React from 'react'

const Contact = () => {
  const config = {
    email: ' mariaanith0901@gmail.com',
    mobile: ' +91 8870851659'
  }
  return (
    <section id='contact' className='flex flex-col bg-secondary py-30 px-5 text-black'>
      <div className='flex flex-col items-center'>

        <h1 className='text-5xl border-b-4 border-primary mb-5 w-[180px] font-bold text-white'>Contact</h1>
        <p className='pb-5 text-2xl'>If You Want To Discuss More In Details, Please Contact Me</p>
        <p className='pb-2'><span className='font-bold'>Email:</span>{config.email}</p>
        <p className='pb-2'><span className='font-bold'>Mobile:</span>{config.mobile}</p>
      </div>
    </section>
  )
}

export default Contact
