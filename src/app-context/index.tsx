'use client';
// import { AuthDataType } from '@grc/_shared/namespace/auth';
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';


type AppProviderPropType = {
  children: ReactNode;
};

interface AppContextPropType {
  toggleSider: boolean;
  setToggleSider: Dispatch<SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextPropType>({
  toggleSider: false,
  setToggleSider: () => {},
  // authData: null,

});

export const AppProvider = (props: AppProviderPropType) => {
  const { children } = props;
  const [toggleSider, setToggleSider] = useState(false);

  const values: any = {
    toggleSider,
    setToggleSider,
    // handleLogOut,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
