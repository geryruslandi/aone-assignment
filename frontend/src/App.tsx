import './App.css';
import { InfoIcon } from './icons/InfoIcon';
import { UsersIcon } from './icons/UsersIcon';
import AOneIcon from './assets/aone-logo.png'

const classes = {
  sidebar: {
    wrapper: 'm-0 p-0 w-[100%] h-auto relative overflow-auto bg-[#363740] md:w-[255px] md:fixed md:h-[100%]',
    child: (isActive = false) => {
      return `text-center block p-[16px] float-left flex flex-row items-center text-[#A4A6B3] md:float-none ${isActive ? 'bg-[#505050]' : ''}`
    },
    childIcon: 'mr-2',
    aOneIcon: {
      wrapper: 'float-left h-[56px] md:float-none flex flex-row items-center text-white text-xl font-bold md:text-2xl md:py-[15px] md:px-[24px] md:h-auto',
      image: 'h-auto max-w-full max-h-full mx-2',
    }
  }
}

function App() {
  return (
    <>
      <div className={classes.sidebar.wrapper}>
        <div className={classes.sidebar.aOneIcon.wrapper}>
          <img src={AOneIcon} className={classes.sidebar.aOneIcon.image} alt='aone-icon'/>
          <span>AOne</span>
        </div>
        <a className={classes.sidebar.child()} href="#home"><InfoIcon className={classes.sidebar.childIcon}/> About</a>
        <a className={classes.sidebar.child(true)} href="#news"><UsersIcon className={classes.sidebar.childIcon}/> User</a>
      </div>
      <div className=''>
        content
      </div>
    </>
  );
}

export default App;
