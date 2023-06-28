import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../Layout/NavBar';
import ModalForm from '../Component/ModalForm';
import ViewDataTable from '../Component/ViewDataTable';

export default function Router() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<ModalForm />} />
                <Route path='/view' element={<ViewDataTable />} />
                <Route path='/abcd' />
                <Route path='/abcd' />

            </Routes>
        </BrowserRouter>
    )
}


