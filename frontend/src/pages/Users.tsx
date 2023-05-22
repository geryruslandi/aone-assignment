import { useEffect, useState } from "react"
import { Card } from "../components/Card"
import { UserTable } from "../components/UserTable"

const classes ={
  title: 'text-2xl font-bold leading-[30px] tracking-[0.3px] mb-5 md:mb-[58px]',
  userList: {
    title: 'bold p-[12px] text-[19px] md:p-[32px]',
    wrapper: 'overflow-auto',
  }
}

export const UsersPage = () => {
  const [users, setUsers] = useState([])

  const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users`)

    const data = (await response.json()).data

    setUsers(data.users)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <>
      <p className={classes.title}>Users</p>
      <Card>
        <div className={classes.userList.title}>All Users</div>
        <div className={classes.userList.wrapper}>
          {users.length > 0 && <UserTable users={users}/>}
        </div>
      </Card>
    </>
  )
}
