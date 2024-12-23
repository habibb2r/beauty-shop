import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'
import AuthProvider from './Providers/AuthProvider/AuthProvider.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
     <QueryClientProvider client={queryClient}>
     <div className='mx-auto'>
     <RouterProvider router={router} />
     </div>
     </QueryClientProvider>
    
     </AuthProvider>
    
  </StrictMode>,
)
