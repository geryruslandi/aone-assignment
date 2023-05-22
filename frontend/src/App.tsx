import './App.css';
import { AOneIcon } from './icons/AOneIcon';
import { InfoIcon } from './icons/InfoIcon';
import { UsersIcon } from './icons/UsersIcon';

const classes = {
  sidebar: {
    wrapper: 'm-0 p-0 w-[255px] fixed h-[100%] overflow-auto bg-[#363740]',
    child: (isActive = false) => {
      return `block p-[16px] text-white text-base text-[#A4A6B3] flex flex-row items-center ${isActive ? 'bg-[#505050]' : ''}`
    },
    childIcon: 'mr-2',
    mainIcon: 'my-[16px] mx-[24px]'
  }
}

function App() {
  return (
    <>
      <div className={classes.sidebar.wrapper}>
        <AOneIcon className={classes.sidebar.mainIcon}/>
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
