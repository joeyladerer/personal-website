import logo from './logo.svg';
import {Center, Box} from "@chakra-ui/react"
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import HomePage from "./Organisms/HomePage";
import Music from "./Organisms/Music";
import SocialsBar from "./Molecules/SocialsBar";
import AboutMe from "./Organisms/AboutMe";
import Gallery from "./Organisms/Gallery";
import Resume from "./Organisms/Resume";

function App() {
    return (
        <Router>
            <Box className="App">
                <Switch>
                    <Route path={"/"} exact>
                        <HomePage/>
                    </Route>
                    <Route path={"/music"}>
                        <Music/>
                    </Route>
                    <Route path={"/about"}>
                        <AboutMe/>
                    </Route>
                    <Route path={"/gallery"}>
                        <Gallery/>
                    </Route>
                    <Route path={"/resume"}>
                        <Resume/>
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
