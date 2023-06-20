import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'

import router from './Routes/Router';
import AuthProvider from './provider/AuthProvider';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import DarkModeToggle from './DarkMoodToggle/DarkMoodToggle';


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

   
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <div className='max-w-screen-xl mx-auto  '>
            <RouterProvider router={router} />
          </div>
        </QueryClientProvider>
      </AuthProvider>
   
  </React.StrictMode>,
)
