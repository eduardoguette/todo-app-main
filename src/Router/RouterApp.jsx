import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TodosActive } from '../components/TodoList/TodosActive';
import { TodosAll } from '../components/TodoList/TodosAll';
import { TodosCompleted } from '../components/TodoList/TodosCompleted';
import { Footer } from '../components/ui/Footer';
import { MainLayout } from '../components/ui/MainLayout';

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<TodosAll />}></Route>
          <Route path='/active' element={<TodosActive />}></Route>
          <Route path='/completed' element={<TodosCompleted />}></Route>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
