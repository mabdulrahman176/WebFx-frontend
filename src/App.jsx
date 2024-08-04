import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Starting from './components/Starting/Starting';
import Faqs from './components/Home/FAQs/Faqs';
import Home from './components/Home/Home';
import Company from './components/Home/Commpany/Company';
import TermCondition from './components/Home/Terms/TermCondition';
import Invitation from './components/Home/Invitation/Invitation';
import Events from './components/Home/Event/Events';
import Recharge from './components/Home/Recharge/Recharge';
import Withdrawal from './components/Home/Withdrawal/Withdrawal';
import Profile from './components/Profile/Profile';
import ChangePassword from './components/Profile/ChangePassword/ChangePassword';
import Team from './components/Profile/Team/Team';
import Notification from './components/Profile/Notifications/Notifications';
import Transactions from './components/Profile/Transactions/Transactions';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import Protected from './components/Protected';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Protected Component={Home} />} />
        <Route path='/starting' element={<Protected Component={Starting} />} />
        <Route path='/profile' element={<Protected Component={Profile} />} />
        <Route path='/event' element={<Events />} />
        <Route path='/recharge' element={<Recharge />} />
        <Route path='/withdrawal' element={<Withdrawal />} />
        <Route path='/invitation' element={<Invitation />} />
        <Route path='/t&c' element={<TermCondition />} />
        <Route path='/faqs' element={<Faqs />} />
        <Route path='/company' element={<Company />} />
        <Route path='/team' element={<Team />} />
        <Route path='/notifications' element={<Notification />} />
        <Route path='/password' element={<ChangePassword />} />
        <Route path='/transaction' element={<Transactions />} />
        <Route path='*' element={<Navigate to='/login' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
