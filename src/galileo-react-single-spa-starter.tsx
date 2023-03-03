import * as React from "react";
import * as ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

import "./main.scss";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

/*TODO replace qny with exact type in the future*/
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "t-sidebar": any;
      "t-progress-bar": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      "t-progress-spinner": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      "t-input": any;
    }
  }
}

export const { bootstrap, mount, unmount } = lifecycles;
