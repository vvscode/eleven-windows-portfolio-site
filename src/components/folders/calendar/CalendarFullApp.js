import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { AppContainer } from "./style";
import { Name, NameBar, Buttons } from "../style";
import { AnimateFadeInOut } from "../../animations/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Draggable from "react-draggable";

class CalendarFullApp extends Component {
    state = {
        close: "",
        disabled: true
    };

    componentDidMount() {
        if (window.matchMedia("(min-width: 35rem)").matches) {
            this.handleDrag();
        }
    }

    quitApp = () => {
        this.setState({
            close: "close"
        });
        setTimeout(() => {
            this.props.closeApp("calendarFullOpen", "calendarFullMinimize");
        }, 200);
    };

    handleDrag = () => {
        this.setState({
            disabled: false
        });
    };

    render() {
        const {
            windowIndex,
            activeWindow,
            minimizeApp,
            calendarFullOpen,
            calendarFullMinimize
        } = this.props;
        const { disabled, close } = this.state;
        return (
            <Draggable axis="both" handle=".handle" disabled={disabled}>
                <AnimateFadeInOut
                    open={calendarFullOpen}
                    minimize={calendarFullMinimize}
                    close={close}
                    appIndex={windowIndex[11]}
                    onClick={() => activeWindow(11)}
                >
                    <AppContainer>
                        <NameBar>
                            <Name className="handle">Calendar</Name>
                            <Buttons>
                                <div
                                    onClick={() =>
                                        minimizeApp(
                                            "calendarFullMinimize",
                                            true
                                        )
                                    }
                                >
                                    <FontAwesomeIcon
                                        icon="window-minimize"
                                        size="sm"
                                    />
                                </div>
                                <Link
                                    to={
                                        window.matchMedia("(max-width: 28rem)")
                                            .matches
                                            ? "/"
                                            : "#"
                                    }
                                    onClick={() => this.quitApp()}
                                >
                                    <FontAwesomeIcon icon="times" size="lg" />
                                </Link>
                            </Buttons>
                        </NameBar>
                        Under Construction Calendar Full App
                    </AppContainer>
                </AnimateFadeInOut>
            </Draggable>
        );
    }
}
export default CalendarFullApp;

CalendarFullApp.propTypes = {
    windowIndex: PropTypes.object.isRequired,
    calendarFullOpen: PropTypes.string.isRequired,
    activeWindow: PropTypes.func.isRequired,
    minimizeApp: PropTypes.func.isRequired,
    closeApp: PropTypes.func.isRequired
};
