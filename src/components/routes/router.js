import { createBrowserRouter } from "react-router-dom"
import mainrouter from "./mainrouter";

const router = createBrowserRouter([ mainrouter],{basename: '/HungryHub'});

export {router};