import {useState, createContext} from 'react';
interface UserInfoProviderProps {
  children: React.ReactNode;
}

interface UserInfoContextProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

const initialStates: UserInfoContextProps = {
  email: '',
  setEmail: () => '',
  password: '',
  setPassword: () => ''
};

export const UserInfoContext = createContext(initialStates);

export const UserInfoProvider: React.FC<UserInfoProviderProps> = ({children}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <UserInfoContext.Provider value={{email, setEmail, password, setPassword}}>
      {children}
    </UserInfoContext.Provider>
  );
};
