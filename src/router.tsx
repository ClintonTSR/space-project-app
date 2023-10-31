import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/homePage";
import PiExplanationPage from "./pages/piExplanation";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomePage/>,
        }, {
        path: '/pi',
        element: <PiExplanationPage/>
    }
    ]);

export default router;