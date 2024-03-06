import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './pages/dashboard/Dashboard';
import Team from './pages/team/Team';
import Contacts from './pages/contacts/Contacts';
import Invoices from './pages/invoices/Invoices';
import Form from './pages/form/Form';
import Calendar from './pages/calendar/Calendar';
import Faq from './pages/faq/Faq';
import Bar from './pages/bar/Bar';
import Pie from './pages/pie/Pie';
import Line from './pages/line/Line';
import Geography from './pages/geopgraphy/Geography';
import NotFound from './pages/notFound/NotFound';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard/>}></Route>
      <Route path="team"  element={<Team/>}></Route>
      <Route path="contacts"  element={<Contacts/>}></Route>
      <Route path="invoices"  element={<Invoices/>}></Route>
      <Route path="form"  element={<Form/>}></Route>
      <Route path="calendar"  element={<Calendar/>}></Route>
      <Route path="faq"  element={<Faq/>}></Route>
      <Route path="bar"  element={<Bar/>}></Route>
      <Route path="Pie"  element={<Pie/>}></Route>
      <Route path="Line"  element={<Line/>}></Route>
      <Route path="Geography"  element={<Geography/>}></Route>



      <Route path="*"  element={<NotFound/>}></Route>
    </Route>
  )
); 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
