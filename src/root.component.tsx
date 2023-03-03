import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { GalileoFrontendLogger } from "@galileo/logging-frontend";

export default function Root() {
  return (
    <div className="react-app">
      <App />
    </div>
  );
}

const MainPage = () => {
  const logger = GalileoFrontendLogger.createLogger({
    connectionString: process.env.REACT_APP_CONNECTION_STRING,
  });

  const trackPageView = () => {
    logger.trackPageView({ name: "React microfrontend app" });
  };

  return (
    <div className="main-container">
      <h1>Galileo logging library (React microfrontend)</h1>
      <button onClick={() => trackPageView()}>Track page view</button>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter basename="/">
      <div className="react-app-content">
        <Switch>
          <Route path="/" component={MainPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
