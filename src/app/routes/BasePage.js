import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { ContentRoute } from "./ContentRoute";
import PrivateRoute from "./PrivateRoute";
import ErrorUnAuthorized from "../pages/ErrorUnAuthorized";
import Home from "../pages/Home";
import Test from "../pages/Test";
import { PERMISSIONS } from "../../Constant";

export default function BasePage(props) {
    return (
        <React.Fragment>
            <Switch>
                <Route
                    exact
                    path="/errorUnAuthorized"
                    component={ErrorUnAuthorized}
                />
                <ContentRoute exact title="home" path="/" component={Home} />
                <ContentRoute
                    exact
                    title="home"
                    path="/home"
                    component={Home}
                />
                <ContentRoute
                    exact
                    path="/test"
                    component={Test}
                    title="Test"
                />

                <PrivateRoute
                    exact
                    path="/permissionTest"
                    permissions={[PERMISSIONS.employee_delete]}
                    component={Test}
                    title="Test Permission"
                />

                {/* nothing match - redirect to error */}
                <Redirect to="/error404" />
            </Switch>
        </React.Fragment>
    );
}
