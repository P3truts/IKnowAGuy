import { Route, Routes } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Layout from "./components/Layout";
import React, {useState, useEffect} from 'react';

const App = () => {

    const [username, setUsername] = useState('');

    useEffect(() => {
        (
        async () => {
            const response = await fetch('https://localhost:44497/account/user', {
                headers: {'Content-Type': 'application/json'},
                credentials: 'include'
        });
            // }).then((res) => response.json()).then((content) => setUsername(content));

            const content = await response.text();
            
            setUsername(content);

            console.log("app username", username);
        }
        )()
    }, []);

    return (
        <Layout username={username}>
            <Routes>
                {AppRoutes.map((route, index) => {
                    const { element, ...rest } = route;
                    return <Route key={index} {...rest} element={element}/>;
                })}
            </Routes>
        </Layout>
    );
};

export default App;
