import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import { Layout } from "antd";
import Header from '../../components/header';

export default function LayoutPro(props) {
    const { routes } = props;
    return (
        <Layout>
            <Header />
            <LoadRoutes routes={routes} />
        </Layout>
    );
}

function LoadRoutes({ routes }) {
    return (
        <Switch>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                />
            ))}
        </Switch>
    )
}