import React from 'react'
import ReactDOM from 'react-dom/client'
import './bootstrap';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { AuthProvider } from './context/AuthContext';

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={ router } />
        </AuthProvider>
    </React.StrictMode>
)