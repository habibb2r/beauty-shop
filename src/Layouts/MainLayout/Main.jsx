import { Outlet } from "react-router-dom";

console.log(import.meta.env.VITE_apiKey)
const Main = () => {
    return (
        <div>
            <h1>navbar</h1>
            <Outlet></Outlet>
            <h1>footer</h1>
        </div>
    );
};

export default Main;