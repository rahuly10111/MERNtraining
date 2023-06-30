import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../Layout/NavBar';
import ModalForm from '../Component/ModalForm';
import ViewDataTable from '../Component/ViewDataTable';
import Login from '../Component/Login';

export default function Router() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/modal' element={<ModalForm />} />
                <Route path='/view' element={<ViewDataTable />} />
                <Route path='/' element={<Login/>} />
                <Route path='/abcd' />

            </Routes>
        </BrowserRouter>
    )
}


