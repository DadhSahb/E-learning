import * as React from "react";
import TutorsList from "../pages/TutorsList";
import Profile from "../pages/Profile";
import RootLayout from "../components/RootLayout";
import DemoRequesttFeilds from './../pages/DemoRequesttFeilds';
import DemoRequestEdit from './../pages/DemoRequestEdit';
import DemoRequestConfirmation from './../pages/DemoRequestConfirmation';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";


export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<TutorsList />} />
      <Route path="profile" element={<Profile />} />
      <Route path="demorequest" element={<DemoRequesttFeilds />} />
      <Route path="demorequestedit" element={<DemoRequestEdit />} />
      <Route path="demorequestconformation" element={<DemoRequestConfirmation />} />
    </Route>
  )
);

export default routes;
