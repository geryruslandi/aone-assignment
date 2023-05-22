import { useEffect, useState } from "react"
import { Card } from "../components/Card"
import { Link, useParams } from "react-router-dom"

const classes ={
  title: 'text-2xl font-bold leading-[30px] tracking-[0.3px] mb-5',
  userCard: {
    title: 'semi-bold p-[12px] text-[19px] md:px-[0px] md:pt-[38px] md:pb-[27px] text-[#252733]',
    wrapper: 'overflow-auto flex flex-col md:flex-row',
  }
}

export const UserPage = () => {

  const {id} = useParams()

  const [user, setUser] = useState<any>()

  const getUser = async () => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/${id}`)

    const data = (await response.json()).data

    setUser(data.user);
  }

  useEffect(() => {
    getUser()
  }, [id])

  return (
    <>
      <p className={classes.title}>User Detail</p>
      {user &&
        <Card className="w-fit flex flex-col md:px-[35px] mb-[36px]">
          <div className={classes.userCard.title}>{user.fullName}</div>
          <div className={classes.userCard.wrapper}>
            <img src={user.image} alt='user thumbnail' className="md:w-[242px] md:h-[242px] rounded-[8px] md:mr-[45px]"/>
            <div className="w-[200px] mb-[38px] p-5 md:p-0">
              <div className="semi-bold text-[#252733] text-[16px] mb-[10px]">First Name</div>
              <div className="text-[#252733] text-[16px] mb-[38px]">{user.firstName}</div>

              <div className="semi-bold text-[#252733] text-[16px] mb-[10px]">Last Name</div>
              <div className="text-[#252733] text-[16px] mb-[38px]">{user.lastName}</div>

              <div className="semi-bold text-[#252733] text-[16px] mb-[10px]">Email</div>
              <div className="text-[#252733] text-[16px]">{user.email}</div>
            </div>
          </div>
        </Card>
      }

      <Link to={`/users`} className='bg-[#65A7DB] rounded-[100px] py-[13px] px-[11px] text-[11px] text-white font-bold md:mr-[32px] w-[94px] block text-center'>
        BACK
      </Link>

    </>
  )
}
