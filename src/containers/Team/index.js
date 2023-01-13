/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchMembers,
  selectLoading,
  selectMembers,
  selectModalOpen,
  toggleModal,
} from './store'

import { icons, images } from '../../assets/images'
import Modal from '../../components/Modal'
import { EditForm } from '../../components/Forms'
import Loader from '../../components/Loader'

const Team = () => {
  const [member, setEditMember] = useState({})

  const dispatch = useDispatch()
  const members = useSelector(selectMembers)
  const loading = useSelector(selectLoading)
  const modalOpen = useSelector(selectModalOpen)

  useEffect(() => {
    dispatch(fetchMembers())
  }, [dispatch])

  const openModal = (member) => {
    dispatch(toggleModal(true))
    setEditMember(member)
  }

  const closeModal = () => {
    dispatch(toggleModal(false))
  }

  return (
    <>
      <div className='bg-red-50 rounded-lg font-raleway mx-auto '>
        {/* heading div */}
        <div className='m-auto w-4/5 text-center'>
          <h1 className='text-[#ed6d18] font-bold text-4xl p-8'>
            Our Amazing Team
          </h1>
          <p className='text-gray-800 pb-10'>
            We are a Software Development Agency. Talk to us, about building
            your development team.
          </p>
        </div>

        {/* cards container */}
        {loading ? (
          <Loader />
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-8 px-4 '>
            {members.map((member) => {
              return (
                <div
                  key={member._id}
                  className='rounded-lg bg-white p-4 mb-10 shadow-md hover:shadow-lg transition-all duration-300  hover:scale-105 ease-in-out'
                >
                  {/* image div */}
                  <div className='rounded-lg mt-auto'>
                    <img
                      className='object-fill rounded-lg'
                      // src='https://picsum.photos/250/200'
                      src={images.userAvatar}
                      alt='member'
                    />
                  </div>

                  {/* text div */}

                  <div className='mt-5 mb-5'>
                    <h2 className='text-gray-400 text-sm font-bold pb-4 '>
                      {member.occupation.toUpperCase()}
                    </h2>
                    <h3 className='text-[#ed6d18] font-bold pb-4'>
                      {member.name ? member.name : 'Kindly update your name'}
                    </h3>
                    <p className='leading-loose line-clamp-2 text-gray-600'>
                      {member.bio ? member.bio : 'Kindly update your bio'}
                    </p>
                    <div className='flex align-middle my-2'>
                      <img
                        src={icons.emailIcon}
                        alt='facebookicon'
                        className='w-6 h-6 self-center mr-2 cursor-pointer hover:scale-110 transition-all duration-300'
                      />
                      <p className='text-gray-500 text-sm mt-4 mb-4'>
                        {member.email
                          ? member.email
                          : 'Kindly update your email'}
                      </p>
                    </div>
                    <hr />

                    {/* icons */}
                    <div className='flex justify-between mt-5 '>
                      <div className='flex space-x-3 self-center'>
                        <img
                          src={icons.facebookIcon}
                          alt='facebookicon'
                          className='w-7 h-7 cursor-pointer hover:scale-110 transition-all duration-300'
                        />
                        <img
                          src={icons.linkedinIcon}
                          alt='linkedinicon'
                          className='w-7 h-7 cursor-pointer hover:scale-110 transition-all duration-300'
                        />
                        <img
                          src={icons.twitterIcon}
                          alt='twittericon'
                          className='w-7 h-7 cursor-pointer hover:scale-110 transition-all duration-300'
                        />
                      </div>

                      <div className=''>
                        <button
                          onClick={() => openModal(member)}
                          className='bg-gradient-to-br from-[#f18a46] to-[#be5713] hover:from-[#be5713] hover:to-[#f18a46] text-white font-bold py-1 px-2 rounded-md shadow-md border border-transparent hover:shadow-lg hover:scale-105 hover:bg-white hover:text-white hover:border hover:border-[#ed6d18] transition-all duration-300'
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}

            <Modal isOpen={modalOpen} closeModal={closeModal}>
              <EditForm member={member} />
            </Modal>
          </div>
        )}
      </div>
    </>
  )
}

export default Team
