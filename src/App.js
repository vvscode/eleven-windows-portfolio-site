import React, { Component } from "react";
import { Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import FolderApp from "./components/folders/FolderApp";
import TaskbarApp from "./components/taskbar/TaskbarApp";
import StartMenuApp from "./components/startMenu/StartMenuApp";
import Desktop from "./components/desktop/Desktop";
import Icon from "./components/desktop/Icon";
import LightTheme from "./components/theme/Light";
import DarkTheme from "./components/theme/Dark";
import CalendarApp from "./components/taskbar/calendar/CalendarApp";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faLongArrowAltLeft,
    faWindowMinimize,
    faTimes,
    faCog,
    faGem,
    faPaperPlane,
    faAnchor,
    faBolt,
    faCube,
    faLeaf,
    faBicycle,
    faBomb,
    faStar
} from "@fortawesome/free-solid-svg-icons";
import {
    faLinkedin,
    faGithubSquare,
    faInstagram,
    faCodepen
} from "@fortawesome/free-brands-svg-icons";
import MemoryGameApp from "./components/folders/memoryGame/MemoryGameApp";
library.add(
    faLongArrowAltLeft,
    faWindowMinimize,
    faTimes,
    faCog,
    faGem,
    faPaperPlane,
    faAnchor,
    faBolt,
    faCube,
    faLeaf,
    faBicycle,
    faBomb,
    faStar,
    faLinkedin,
    faGithubSquare,
    faCodepen,
    faInstagram
);

class App extends Component {
    state = {
        startMenuOpen: "close",
        memoryGameOpen: "close",
        calendarOpen: "close",
        windowIndex: {
            1: 100,
            2: 100
        }
    };

    toggleAppVisibility = key => {
        this.state[key] === "close"
            ? this.setState({ [key]: "open" })
            : this.setState({ [key]: "close" });
    };

    startApp = key => {
        this.setState({ [key]: "open" });
    };

    closeApp = key => {
        if (this.state[key] === "open") {
            this.setState({ [key]: "close" });
        }
    };

    activeWindow(newActive) {
        const newObj = {};
        Object.keys(this.state.windowIndex).forEach(() => {
            newObj.key = 100;
        });
        const activedWindow = Object.assign({}, newObj, { [newActive]: 104 });
        this.setState({ windowIndex: activedWindow });
    }

    // openUrlMobile = url => {
    //     // Opens on mobile with onClick
    //     if (window.matchMedia("(max-width: 56.25rem)").matches) {
    //         history.push(url);
    //     }
    // };

    // openUrlDesktop = url => {
    //     //  Opens on desktop with doubleClick
    //     if (window.matchMedia("(min-width: 56.31rem)").matches) {
    //         history.push(url);
    //     }
    // };

    // handleKeyPress = (e, url) => {
    //     if (e.key === "Enter") {
    //         history.push(url);
    //     }
    // };

    render() {
        const {
            startMenuOpen,
            windowIndex,
            memoryGameOpen,
            calendarOpen
        } = this.state;
        return (
            <ThemeProvider theme={DarkTheme}>
                <Route
                    path="/"
                    render={() => (
                        <React.Fragment>
                            <Desktop
                                onClick={() => {
                                    this.closeApp("startMenuOpen");
                                    this.closeApp("calendarOpen");
                                }}
                            >
                                {/* Desktop Routes */}
                                <Route
                                    exact
                                    path="/apps"
                                    render={() => (
                                        <React.Fragment>
                                            <FolderApp
                                                windowIndex={windowIndex}
                                                activeWindow={this.activeWindow.bind(
                                                    this
                                                )}
                                            />
                                            <MemoryGameApp
                                                windowIndex={windowIndex}
                                                activeWindow={this.activeWindow.bind(
                                                    this
                                                )}
                                                memoryGameOpen={memoryGameOpen}
                                                closeApp={this.closeApp}
                                            />
                                        </React.Fragment>
                                    )}
                                />

                                {/* Mobile Routes */}
                                <Route
                                    exact
                                    path="/apps/memorygame"
                                    render={() => (
                                        <MemoryGameApp
                                            windowIndex={windowIndex}
                                            activeWindow={this.activeWindow.bind(
                                                this
                                            )}
                                            memoryGameOpen={memoryGameOpen}
                                            closeApp={this.closeApp}
                                        />
                                    )}
                                />

                                <Icon
                                    tabIndex="1"
                                    // onClick={() => this.openUrlMobile("/apps")}
                                    // onDoubleClick={() =>
                                    //     this.openUrlDesktop("/apps")
                                    // }
                                    // onKeyPress={(e, url) =>
                                    //     this.handleKeyPress(e, "/apps")
                                    // }
                                >
                                    <img
                                        src={require("./components/desktop/img/folder-icon.png")}
                                        alt="my stuff"
                                    />
                                    <div>My Stuff</div>
                                </Icon>
                                <Icon
                                    tabIndex="2"
                                    // onClick={() =>
                                    //     this.openUrlMobile("/documents")
                                    // }
                                    // onDoubleClick={() =>
                                    //     this.openUrlDesktop("/documents")
                                    // }
                                    // onKeyPress={(e, url) =>
                                    //     this.handleKeyPress(e, "/documents")
                                    // }
                                >
                                    <img
                                        src={require("./components/desktop/img/folder-icon.png")}
                                        alt="test"
                                    />
                                    <div>Documents</div>
                                </Icon>
                                <Icon
                                    tabIndex="3"
                                    // onClick={() => this.openUrlMobile("/about")}
                                    // onDoubleClick={() =>
                                    //     this.openUrlDesktop("/about")
                                    // }
                                >
                                    <img
                                        src={require("./components/desktop/img/folder-icon.png")}
                                        alt="test"
                                    />
                                    <div>About</div>
                                </Icon>
                                <TaskbarApp
                                    toggleAppVisibility={
                                        this.toggleAppVisibility
                                    }
                                />
                            </Desktop>
                            <CalendarApp calendarOpen={calendarOpen} />
                            <StartMenuApp
                                closeApp={this.closeApp}
                                startMenuOpen={startMenuOpen}
                                startApp={this.startApp}
                            />
                        </React.Fragment>
                    )}
                />
            </ThemeProvider>
        );
    }
}

export default App;
