import React from 'react'

const CreateUsers = () => {
  return (
    <>
      <h2>New User</h2>
      <div className="row">
        <div className="col-sm-6 justify-content-center">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>

        <div className="col-sm-6 justify-content-center">

        </div>
      </div>
    </>
  )
}

export default CreateUsers