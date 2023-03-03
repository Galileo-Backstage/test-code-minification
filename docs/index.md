# Overview

- React Single-SPA Starter App

### Features list

-  Silent authentication for React App

# Quick start

## Prerequisites
1.  In Azure, create the following resources:
    - App registration
        - See [App registration](https://docs.microsoft.com/en-us/azure/active-directory/develop/scenario-spa-app-registration).
        
## Setup

### Setup instructions

1.  Install all development dependencies: <br/>
    ```
    npm install
    ```

2. Configure your application:
    - Environment variables
        - environments.ts
            - Default local settings. Update with Azure settings that you configured previously.
                - ClientId : This is the ONLY mandatory field that you need to supply.
                - Authority: Defaults to "https://login.microsoftonline.com/common"
                - RedirectUri: // Points to window.location.origin. You must register this URI on Azure portal/App Registration.
                - PostLogoutRedirectUri: // Indicates the page to navigate after logout.

    After that, start the development server

    1. npm run start
    2. and in the browser console use: enableForLocal('react-starter', 4206, 'main-es2015.js');

