import { useLocation } from "react-router-dom";

export function Home(){

    const location = useLocation();


    return(
        <h1>Welcome</h1>
    );
}