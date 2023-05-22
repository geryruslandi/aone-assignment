import { InfoIcon } from '../icons/InfoIcon';
import { UsersIcon } from '../icons/UsersIcon';
import AOneIcon from '../assets/aone-logo.png'
import { RouterProvider } from 'react-router-dom';
import { routers } from '../routers';

const classes = {
  container: 'flex flex-col md:flex-row h-full',
  sidebar: {
    wrapper: 'flex md:flex-col bg-[#363740] md:w-[255px]',
    child: (isActive = false) => {
      return `text-center block p-[16px] flex flex-row items-center text-[#A4A6B3]  ${isActive ? 'bg-[#505050]' : ''}`
    },
    childIcon: 'mr-2',
    aOneIcon: {
      wrapper: 'h-[56px] flex flex-row items-center text-white text-xl font-bold md:text-2xl md:py-[15px] md:h-auto',
      image: 'h-auto max-w-full max-h-full mx-2 md:ml-[24px]',
    }
  },
  contentWrapper: 'p-5 grow bg-[#E5E5E5] md:pt-[36px] md:px-[30px]'
}

function App() {

  const path  = window.location.pathname
  const isUserPage = path === '/' || path.match(/.*users.*/) !== null



  return (
    <div className={classes.container}>
      <div className={classes.sidebar.wrapper}>
        <div className={classes.sidebar.aOneIcon.wrapper}>
          <img src={AOneIcon} className={classes.sidebar.aOneIcon.image} alt='aone-icon'/>
          <span>AOne</span>
        </div>
        <a className={classes.sidebar.child(!isUserPage)} href="/about"><InfoIcon className={classes.sidebar.childIcon}/> About</a>
        <a className={classes.sidebar.child(isUserPage)} href="/users"><UsersIcon className={classes.sidebar.childIcon}/> User</a>
      </div>
      <div className={classes.contentWrapper}>
        <RouterProvider router={routers}/>
      </div>
    </div>
  );
}

export default App;
