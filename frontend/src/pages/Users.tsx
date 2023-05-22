import { Card } from "../components/Card"
import { UserTable } from "../components/UserTable"

const classes ={
  title: 'text-2xl font-bold leading-[30px] tracking-[0.3px] mb-5',
  userList: {
    title: 'bold p-[12px] text-[19px] md:p-[32px]',
    wrapper: 'overflow-auto',
  }
}

export const UsersPage = () => {
  return (
    <>
      <p className={classes.title}>Users</p>
      <Card>
        <div className={classes.userList.title}>All Users</div>
        <div className={classes.userList.wrapper}>
          <UserTable/>
        </div>
      </Card>
    </>
  )
}
