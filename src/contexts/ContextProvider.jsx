import React, {createContext, useContext, useState, useEffect} from 'react';
import fetchHortatech from '../helpers/fetchHortatech';

const StateContext = createContext();

/**We define the initial state of the chat, cart and notification in the navbar at the top. If they are opened or closed. */
const initialState = {
    help: false,
    settings: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState (true);
    const [isClicked, setIsClicked] = useState (initialState);
    /**on click we take the initial state (everything's false) and we change only the value of the object we clicked */
    const handleClick = (clicked) => {setIsClicked({ ...initialState, [clicked]:true})};
    /**set screen size for handling small size screens */
    const [screenSize, setScreenSize] = useState (undefined);
    const [activeAppbar, setActiveAppbar] = useState (true);
    const [activeLoginForm, setActiveLoginForm] = useState (false);
    const [showIconsOnly, setShowIconsOnly] = useState(false);
    const [userFrontLayout, setUserFrontLayout] = useState([]);
    //
    //const [refreshData, setRefreshData] = useState(false);
    // State variables for user profile
    const [userProfile, setUserProfile] = useState({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        profession: '',
        password: '',
        darkMode: false,
        // dashboardLayout: [],
    });

    const updateUser = newUser => {
        setUserProfile(prevUser => ({
            ...prevUser, ...newUser 
        }));
    };  

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    //of locations and products instead of the GTIN number.

    const toggleDarkMode = () => {
        setUserProfile(prevState => ({
            ...prevState,
            darkMode: !prevState.darkMode,
        }));
    };

    return (
        <StateContext.Provider 
            value={
                {
                handleClick, updateUser,toggleDarkMode,
                activeMenu, setActiveMenu, 
                isClicked, setIsClicked,
                screenSize, setScreenSize,
                activeAppbar, setActiveAppbar,
                activeLoginForm, setActiveLoginForm,
                showIconsOnly, setShowIconsOnly,
                userProfile, setUserProfile,
                userFrontLayout, setUserFrontLayout,
                }
            }>                                   
            {children}
        </StateContext.Provider>
    )
}

/**We use the activeMenu inside the components of the app by exporting the useStateContext. 
 * It's a function that returns the calls to the useContext but we pass which context will we wanna use.
 * Nemo tip: "Give me the data from the context (useStateContext) by using the context (useContext) and we specify which one (StateContext)"
 * In this app we'll have one context but in bigger applications we can have multiple context providers.
*/
export const useStateContext = () => useContext (StateContext);