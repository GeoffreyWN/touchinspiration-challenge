/* eslint-disable comma-dangle */
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateMember } from '../../containers/Team/store'
import PropTypes from 'prop-types'
import { PencilSquareIcon } from '@heroicons/react/24/solid'

const EditForm = ({ member }) => {
  const initialState = {
    name: member.name,
    email: member.email,
    occupation: member.occupation,
    bio: member.bio,
  }

  const [formValues, setFormValues] = useState(initialState)
  const [chars, setChars] = useState(0)
  const [isSubmitting, setisSubmitting] = useState(false)

  const { name, occupation, email, bio } = formValues

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    const memberId = member._id
    e.preventDefault()

    setisSubmitting(true)
    dispatch(updateMember({ memberId, ...formValues }))
  }

  return (
    <div className='bg-red-50 py-2 md:py-10 px-4 md:px-8  rounded-xl font-raleway'>
      <div className=' px-4 py-5 md:py-10 my-5 md:my-10 max-w-screen-md mx-auto space-y-8 bg-red-100 rounded-xl shadow-xl flex flex-col justify-center items-center'>
        <div className='flex text-[#ed6d18] content-center mx-auto'>
          <PencilSquareIcon className='h-8 w-8 md:h-10 md:w-10 pr-2 ' />
          <h2 className='text-2xl md:text-3xl font-bold text-[#ed6d18] text-center '>
            {member.name}
          </h2>
        </div>

        <div className='mt-12 max-w-lg mx-auto '>
          <form onSubmit={(e) => handleSubmit(e)} className='w-full'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8'>
              <label className='block text-left'>
                <span className='text-[#ed6d18] text-md md:text-lg'>Name</span>
                <input
                  type='text'
                  value={name}
                  name='name'
                  className='input-style'
                  placeholder='Name'
                  onChange={(e) => handleChange(e)}
                  required
                />
              </label>

              <label className='block text-left'>
                <span className='text-[#ed6d18] text-md md:text-lg'>
                  Occupation
                </span>
                <input
                  type='text'
                  value={occupation}
                  name='occupation'
                  className='input-style'
                  placeholder='Occupation'
                  onChange={(e) => handleChange(e)}
                  required
                />
              </label>
            </div>
            <div className='mt-8'>
              <label className='block text-left'>
                <span className='text-[#ed6d18] text-md md:text-lg'>
                  Email address
                </span>
                <input
                  type='email'
                  value={email}
                  name='email'
                  className='input-style'
                  placeholder='name@yourdomain.com'
                  onChange={(e) => handleChange(e)}
                  required
                />
              </label>
            </div>

            <div className='mx-auto py-8'>
              <label className='block text-gray-500'>
                <span className='text-[#ed6d18] text-md md:text-lg'>Bio</span>
                <textarea
                  className='input-style resize-none'
                  maxLength={150}
                  rows='4'
                  name='bio'
                  value={bio}
                  onChange={(e) => {
                    handleChange(e)
                    setChars(e.target.value.length)
                  }}
                ></textarea>
                <p className='text-xs text-right pt-3'>{chars}/150</p>
              </label>
            </div>

            <div className=' pt-2 md:pt-6 pb-2 text-center'>
              <button
                type='submit'
                className={`${
                  isSubmitting && 'cursor-not-allowed'
                } 'inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow-md rounded-md text-white bg-[#ed6d18] transition ease-in-out duration-250 hover:text-[#ed6d18] hover:bg-white '`}
                disabled=''
              >
                {isSubmitting ? (
                  <div className='flex'>
                    <svg
                      className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <circle
                        className='opacity-25'
                        cx='12'
                        cy='12'
                        r='10'
                        stroke='currentColor'
                        strokeWidth='4'
                      ></circle>
                      <path
                        className='opacity-75'
                        fill='currentColor'
                        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                      ></path>
                    </svg>
                    <p>Updating...</p>
                  </div>
                ) : (
                  <p>Update</p>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

EditForm.propTypes = {
  member: PropTypes.object,
}

export default EditForm
