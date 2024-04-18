import React, { useEffect, useState } from 'react'
import { Link, NavLink, Navigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
// import { ReactComponent as LogoutIcon } from "../icons/logout.svg";
import { ReactComponent as SettingsIcon } from "../icons/settings.svg";
import { ReactComponent as HelpIcon } from "../icons/help.svg";
// import {Tooltip} from 'react-tooltip';
import { links } from '../data/navLinks';  /**Dummy data. Only for testing purposes */
import { useStateContext } from '../contexts/ContextProvider';
// import { useAuth } from '../contexts/AuthContext';
import Logo from '../icons/logo.svg'

const Sidebar = ({ isSidebarOpen, toggleMobileSidebar }) => {
  const { activeMenu, setActiveMenu, screenSize, setActiveAppbar, setActiveLoginForm, showIconsOnly, setShowIconsOnly, setScreenSize } = useStateContext();     /**From ContextProvider */
  const onLogout = () => {
    // handleLogout();
    Navigate('/login');
  }

  // const handleCloseAppbarAndSidebar = (link) => {
  //   if (link.Name === "Login") {
  //     // Set activeTopbar to true when link.name is "login"
  //     setActiveAppbar(false);
  //     setActiveMenu(false);
  //     setActiveLoginForm(true);
  //   } else {
  //     setActiveAppbar(true);
  //     setActiveMenu(true);
  //   }
  // }  

  const NavButton = ({  title, customFunc, icon }) => (
    <div>
        <button 
          type="button" 
          onClick={customFunc} 
          className='relative text-xl px-[0.875rem] py-3 dark:text-gray-200 text-gray-700 dark:hover:text-dark-green-700 hover:text-dark-green-400'
          data-tooltip-id="bNavButton"
          data-tooltip-delay-hide="500"
          data-tooltip-delay-show="1000"
          data-tooltip-content="Muestra/Esconde Menú"
        >
          <span className="absolute inline-flex h-2 w-2 right-2 top-2"/>
          {icon}
          {/* <span>{title}</span> */}
        </button>
        {/* <Tooltip  className='md:hidden custom-tooltip' id="bNavButton" place="right" type="dark" effect="solid"/> */}
    </div>
  )
  
  const toggleMenuText = () => {
    if (screenSize >= 768) {
      setShowIconsOnly(prev => !prev);
    } 
    else {
      toggleMobileSidebar();
      // setActiveMenu(prev => !prev);
    }
  }


  /**
   * We figure out the initial size when the window loads.     
   * Leave this here or moved it to sidebar or other file?   
  */
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);

  }, []);
  
  /**Whenever the screen size changes, if the screen size is smaller than 900 we deactivate the sidebar otherwise we activate it */
  /**NOTE: THIS IS THE REASON THE SIDEBAR APPEARS AUTOMATICALLY WHEN THE SCREEN RESIZES EVEN IF THE LOGIN FORM IS ON THE SCREEN.
   * FIND A SOLUTION: MAYBE ADD ANOTHER VARIABLE THAT HOLDS THE STATE OF THE LOGIN FORM. SET IT TO TRUE WHEN THE LOGIN FORM SHOWS UP AFTER CLICK ON THE LOGIN OPTION ON THE SIDEBAR MENU,
   * OTHERWISE SET IT TO FALSE. IF ITS TRUE THE SIDEBAR MUST NOT APPEAR EVEN IF THE SCREEN SIZE IS BIGGER THAN 900. Solution in next useEffect.
   * Leave this here or moved it to sidebar or other file?
   * 
   */
  useEffect(() => {
    if(screenSize < 768) {
      setShowIconsOnly(false);
      setActiveMenu(true);
    }         
    if (screenSize >=768 && screenSize <1024) {
      setShowIconsOnly(true);
      setActiveMenu(true);
    }
    if (screenSize >=1024) {
      setShowIconsOnly(false);
      setActiveMenu(true);
    }
  }, [screenSize, setActiveMenu, setShowIconsOnly]);

  const activeLink = 'dark:bg-gray-900 bg-gray-200 hover:bg-dark-green-500 dark:hover:bg-gray-700 text-dark-green-600 dark:text-dark-green-300 hover:text-gray-900 ';
  const normalLink = 'hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700 text-gray-900 hover:text-gray-800';

  return (
    <nav className={`relative flex flex-col justify-between z-50 bg-white dark:bg-gray-950 border-r border-r-gray-200/50 dark:border-r-gray-900/80 overflow-clip sidebar ${isSidebarOpen ? 'mobileClosed ' : 'mobileOpen '} ${showIconsOnly ? 'closed' : 'open'}`}>
      {/* <button onClick={toggleMobileSidebar} className={`${(activeMenu) ? 'opacity-100 ' : 'opacity-0 pointer-events-none'} cursor-default transition-opacity absolute  inset-0 bg-black/30  -z-10`}></button> */}
      {activeMenu && (<>
        {/**Item at the top with logo and button to close the sidebar */}
        <div className=" relative flex justify-between py-2 items-center">
          {/* Link not working? */}
          <Link to="/" onClick={toggleMobileSidebar} 
            className={`items-center ml-4 m-1 flex  tracking-tight text-gray-100 ${showIconsOnly ? 'hidden' : ''}`}>
              <img src={Logo} alt="zerofood" className="transition-transform duration-200 hover:scale-110 object-contain object-left size-8"/>
              <span className='ml-4 text-lg text-gray-950 dark:text-gray-100'>Fibsen</span>
          </Link>
            
          <NavButton 
          className="hidden md:"
            title="Menu" 
            customFunc={toggleMenuText}
            icon={<Icon className={`transition-all ml-2 size-5 ${showIconsOnly ? 'rotate-180' : 'rotate-0'}`} icon="ri:contract-left-line" />}>
          </NavButton>
        </div>
        <span className="w-[calc(100%_-_24px)] mx-auto h-px bg-gray-900/80 "></span>
        {/**MENU ITEMS AND LINKS*/}
        <div className=''>
          {/**We pass the items of the menu as an array and we loop over them. DON'T FORGET THE KEY */}
          {links.map((item) => (
            <div key={item.title}> 
              {/** We make the title (Main Menu) invisible only for tablet screen sizes */} 
              <p className='text-gray-400 m-3 mt-4 uppercase visible md:invisible lg:visible'>
                {item.title}
              </p>
              {/*
               * We loop over the links. DON'T FORGET THE KEY 
               * className={({ isActive }) => }.We call a function that will accept a state isActive for each item. Based on that state we can render different classNames.
               * We define at the top two different classNames for active and not active links. if isActive we render activeLink, otherwise we render normalLink. 
              */}
              {item.links.map((link) => (
                <NavLink 
                  to={`/${link.name}`} 
                  key={link.name}
                  onClick={() => {
                    toggleMobileSidebar();
                  }}
                  className={({ isActive }) => `flex ${isActive ? activeLink : normalLink} transition-colors duration-150 flex items-center h-12 gap-5 px-[1.375rem] py-3 text-md`}
                  >
                  <span className='size-5 shrink-0'>{link.icon}</span>
                  <span className={`${showIconsOnly ? 'opacity-0 duration-75 ' : 'md:duration-300 md:delay-300 opacity-100'} transition-opacity`}>{link.menuNameSpa}</span>

                  {/* {!showIconsOnly && <span>{link.menuNameSpa}</span>}                   */}
                </NavLink>
              ))}
            </div>
          ))}
        </div>    
        <div className="mt-auto flex flex-col w-full">
          <div className={`${showIconsOnly ? 'opacity-0 duration-75 ' : 'md:duration-300 md:delay-300 opacity-100'} flex flex-col my-2 space-y-1 transition-opacity`}>
            <span className='text-center text-gray-300 dark:text-gray-600 text-xs font-sans select-none' >Developed by Baukunst</span>
          </div>
          {/* <div className="w-full" key="Settings"> 
            <NavLink 
              to={`/ajustes`} 
              key="settings"
              onClick={() => {
                toggleMobileSidebar();
              }}
              className={({ isActive }) => `flex ${isActive ? activeLink : normalLink} transition-colors duration-150 flex items-center h-12 gap-5 px-[1.375rem] py-3 text-md`}
              data-tooltip-id="linkSidebar"
              data-tooltip-content="Perfil de usuario"
              data-tooltip-delay-show={100}
              data-tooltip-delay-hide={500}
            >                  
              <span className='text-xl'>
                <Icon icon="iconamoon:profile-circle" className='h-5 w-5' />
              </span>      
                <span className={`${showIconsOnly ? 'opacity-0 duration-75 ' : 'md:duration-300 md:delay-300 opacity-100'} transition-opacity`}>Perfil de usuario</span>
              </NavLink>
          </div>     */}
          <div className="w-full" key="help"> 
            <NavLink 
              to={`/ayuda`} 
              key="help"
              onClick={() => {
                toggleMobileSidebar();
              }}
              className={({ isActive }) => `flex ${isActive ? activeLink : normalLink} transition-colors duration-150 flex items-center h-12 gap-5 px-[1.375rem] py-3 text-md`}
            >
              <span className='size-5 shrink-0'>
            <HelpIcon className="size-full" />
                </span>        
                <span className={`${showIconsOnly ? 'opacity-0 duration-75 ' : 'md:duration-300 md:delay-300 opacity-100'} transition-opacity`}>Ayuda</span>
              </NavLink>
          </div>    
          
          {/* <div className="w-full" key="logout"> 
            <NavLink 
              to={`/login`} 
              key="logout"
              onClick={() => {
                onLogout();}}
              className={({ isActive }) => `flex ${isActive ? activeLink : normalLink} transition-colors duration-150 flex items-center h-12 gap-5 px-[1.375rem] py-3 text-md ${showIconsOnly ? 'mb -5' : ''}`}
              data-tooltip-id="linkLogout"
              data-tooltip-content="Cerrar la sesión"
              data-tooltip-delay-show={100}
              data-tooltip-delay-hide={500}
            >                  
                <LogoutIcon className="size-5" />
              <span className={`${showIconsOnly ? 'opacity-0 duration-75 ' : 'md:duration-300 md:delay-300 opacity-100'} transition-opacity`}>Cerrar la sesión</span>
              </NavLink>
          </div>   */}
          <div className="w-full" key="settings"> 
            <NavLink 
              to={`/settings`} 
              key="settings"
              onClick={() => {
                onLogout();}}
              className={({ isActive }) => `flex ${isActive ? activeLink : normalLink} transition-colors duration-150 flex items-center h-12 gap-5 px-[1.375rem] py-3 text-md ${showIconsOnly ? 'mb -5' : ''}`}
            >
              <span className='size-5 shrink-0'>
                <SettingsIcon className="size-full" />
              </span>
                {/* <LogoutIcon className="size-5" /> */}
              <span className={`${showIconsOnly ? 'opacity-0 duration-75 ' : 'md:duration-300 md:delay-300 opacity-100'} transition-opacity`}>
                Ajustes
                </span>
              </NavLink>
          </div>  
        </div>    
      </>)}
    </nav>
  )               
}                 

export default Sidebar

