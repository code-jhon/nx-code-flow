import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import { router } from './app/utils/routes';

import { UserInfoProvider } from './app/contexts/UserInfoContext';

import './app/app.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <UserInfoProvider>
      <RouterProvider router={router} />
    </UserInfoProvider>
  </StrictMode>
);
