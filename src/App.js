import { useState } from 'react';
import './App.css';
import '/node_modules/react-grid-layout/css/styles.css'
import '/node_modules/react-resizable/css/styles.css'
import { Icon } from '@iconify/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useStateContext } from './contexts/ContextProvider';
import { useEffect } from 'react';
import Sidebar from './components/Sidebar';
import { Dashboard, Calendar, Notifications, Sensors, Map, Chat, Settings, Community } from './pages';
import NavBar from './components/NavBar';
import Login from './pages/Login';
// Login, Register, ForgotPassword, ForgotPasswordReset

const App = () => {
  const [isSidebarOpen, setIsMobileSidebarOpen] = useState(true);
  const { userProfile } = useStateContext();

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isSidebarOpen);
  };
  useEffect(() => {
    if (userProfile.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [userProfile.darkMode]);

  return (
    <div className="app">
      <BrowserRouter>
        <Sidebar isSidebarOpen={isSidebarOpen} toggleMobileSidebar={toggleMobileSidebar} />
        <div className="main-content bg-gray-50 dark:bg-gray-1000 grid grid-rows-[auto,_1fr] ">
          <NavBar toggleMobileSidebar={toggleMobileSidebar} />
          <main className='p-4 w-full h-full '>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/sensors" element={<Sensors />} />
              <Route path="/map" element={<Map />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/login" element={<Login />} />
              <Route path="/community" element={<Community />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
