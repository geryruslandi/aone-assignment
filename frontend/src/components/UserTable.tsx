import React, { useEffect, useMemo, useRef, useState } from "react"
import { Link } from "react-router-dom"

const classes ={
  table: {
    wrapper: 'w-[100%] mb-[50px]',
    header: 'font-bold text-[#9FA2B4] text-[14px] leading-[18px] border-b-[1.5px] border-[#DFE0EB]',
    nameCol: {
      wrapper: 'w-[200px] pr-2',
      wrapperDiv: 'flex flex-row items-center py-[5px] md:my-[24px] md:w-[350px]',
      text: 'font-semibold text-[14px] text-[#252733]',
      img: 'w-[40px] h-[40px] rounded-[40px] mr-[10px] ml-[5px] md:mx-[32px]',
    },
    emailCol: {
      wrapper: 'pr-2 font-semibold text-[14px] text-[#252733]',
    },
    actionCol: {
      wrapper: 'w-[90px] md:w-[125px]',
      buttonWrapper: 'bg-[#65A7DB] rounded-[100px] py-[13px] px-[11px] text-[11px] text-white font-bold md:mr-[32px]'
    },
  },
}

export const UserTable: React.FC<{users: any[]}> = ({users}) => {

  const [usersToRender, setUsersToRender] = useState<typeof users>([])
  const dataPerPage = useRef(5)
  const currentPage = useRef(1)

  const paginate = (page: number) => {

    if(page < 1) {
      return
    }

    const from = (page * dataPerPage.current) - dataPerPage.current
    const to = dataPerPage.current * page
    const data = users
      .slice(from, to)

    setUsersToRender(data)
    currentPage.current = page;
  }

  useEffect(() => {
    paginate(currentPage.current)
  }, [users])

  const rows = useMemo(() => {
    return usersToRender.map((user) => (
      <tr key={user.id} className="border-b">
        <td className={classes.table.nameCol.wrapper}>
          <div className={classes.table.nameCol.wrapperDiv}>
            <img className={classes.table.nameCol.img} src={user.image} alt="user avatar"/>
            <div className={classes.table.nameCol.text}>
              {user.fullName}
            </div>
          </div>
        </td>
        <td className={classes.table.emailCol.wrapper}>
          {user.fullName}
        </td>
        <td className={classes.table.actionCol.wrapper}>
          <Link to={`/users/${user.id}`} className={classes.table.actionCol.buttonWrapper}>
            VIEW DETAIL
          </Link>
        </td>
      </tr>
    ))
  }, [usersToRender])

  const paginationInfo = useMemo(() => {
    const from = (currentPage.current * dataPerPage.current) - dataPerPage.current
    const to = dataPerPage.current * currentPage.current

    return `${from + 1} - ${to} of ${users.length}`
  }, [users, usersToRender])

  return (
    <div>
      <table className={classes.table.wrapper}>
        <thead>
          <tr className={classes.table.header}>
            <th>
              <div className="ml-[50px] text-left md:ml-[105px] my-[12px]">
                Full name
              </div>
            </th>
            <th>
              <div className="text-left ">
                Email
              </div>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
      <div className="text-[#9FA2B4] mr-[32px] mb-[32px]">
        <div className="flex flex-row-reverse">
          <div className="text-lg cursor-pointer" onClick={() => paginate(currentPage.current + 1)}>&gt;</div>
          <div className="mr-[30px] text-lg cursor-pointer" onClick={() => paginate(currentPage.current - 1)}>&lt;</div>
          <div className="mr-[33px]">
            {paginationInfo}
          </div>
        </div>
      </div>
    </div>
  )
}
