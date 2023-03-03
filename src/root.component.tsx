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
    connectionString: 'InstrumentationKey=ce891b81-4313-4619-8156-75ba38e07d42;IngestionEndpoint=https://centralus-0.in.applicationinsights.azure.com/;LiveEndpoint=https://centralus.livediagnostics.monitor.azure.com/',
  });

  const trackPageView = () => {
    logger.trackPageView({ name: "React microfrontend app" });
  };

  const throwError = () => {
    throw new Error('Test error from deployed app');
  }

  return (
    <div className="main-container">
      <h1>Galileo logging library (React microfrontend)</h1>
      <button onClick={() => trackPageView()}>Track page view</button>
      <button onClick={() => throwError()}>Throw error</button>
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
