import logo from './logo.svg';
import {Center, Box} from "@chakra-ui/react"
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import HomePage from "./Organisms/HomePage";
import SocialsBar from "./Molecules/SocialsBar";

function App() {
    return (
        <Router>
            <Box className="App">
                <Switch>
                    <Route path={"/"} exact>
                        <HomePage/>
                    </Route>
                    <Route path={"/music"}>
                        <HomePage/>
                    </Route>
                    <Route path={"/about"}>
                        <HomePage/>
                    </Route>
                    <Route path={"/gallery"}>
                        <HomePage/>
                    </Route>
                    <Route path={"/resume"}>
                        <HomePage/>
                    </Route>
                </Switch>
                <Center>
                <SocialsBar/>
                </Center>
            </Box>
        </Router>
    );
}

export default App;
