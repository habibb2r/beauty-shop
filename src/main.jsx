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
import { Provider } from 'react-redux'
import { store } from './Redux/store.js'

const queryClient = new QueryClient();


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <AuthProvider>
     <QueryClientProvider client={queryClient}>
     <div className='mx-auto'>
     <RouterProvider router={router} />
     </div>
     </QueryClientProvider>
    
     </AuthProvider>
    </Provider>
    
  </StrictMode>,
)
