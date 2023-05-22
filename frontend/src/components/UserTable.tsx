const classes ={
  table: {
    wrapper: 'w-[100%]',
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
      wrapper: 'md:w-[150px]',
      buttonWrapper: 'bg-[#65A7DB] rounded-[100px] py-[13px] px-[11px] text-[11px] text-white font-bold md:mr-[32px]'
    },
  },
}

export const UserTable = () => {
  return (
    <table className={classes.table.wrapper}>
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
      <tr>
        <td className={classes.table.nameCol.wrapper}>
          <div className={classes.table.nameCol.wrapperDiv}>
            <img className={classes.table.nameCol.img} src="https://loremflickr.com/640/480/people?lock=3900657159372800" alt="user avatar"/>
            <div className={classes.table.nameCol.text}>
              Tom Cruise
            </div>
          </div>
        </td>
        <td className={classes.table.emailCol.wrapper}>
          george.bluth@reqres.in
        </td>
        <td className={classes.table.actionCol.wrapper}>
          <div className={classes.table.actionCol.buttonWrapper}>
            VIEW DETAIL
          </div>
        </td>
      </tr>
    </table>
  )
}
