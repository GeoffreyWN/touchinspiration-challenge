import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMembers, selectLoading, selectMembers } from './store'

const Team = () => {
  const dispatch = useDispatch()
  // const members = useSelector(selectMembers)
  const loading = useSelector(selectLoading)



  console.log('loading =>', loading)

  useEffect(() => {
    dispatch(fetchMembers())
  }, [dispatch])

  return (
    <>
      <div>
        {/* heading div */}
        <div>
          <h1>Our Amazing Team</h1>
          <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have</p>
        </div>

        {/* cards container */}
        <div>

        </div>
      </div>
    </>
  )
}

export default Team
