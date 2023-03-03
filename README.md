# React Single-SPA Starter App
This front-end application use MSAL (Microsoft Authentication Library), in particular the ssoSilent method to sign-in the user and obtain tokens without an interaction. 

- Authentication
	- The application uses the MSAL packages `@azure/msal-browser` and `@azure/msal-react` to provides a more seamless experience by reducing the number of times your users are asked for their credentials.
	- Users enter their credentials once, and the established session can be reused by other applications on the device without further prompting. 


# Built with
 - React 17
 - Azure MSAL library

## Documentation
- [Overview](docs/index.md)
- [Troubleshooting](docs/troubleshooting.md)

## Useful links
- [Microsoft example of SPA using MSAL](https://docs.microsoft.com/en-us/azure/active-directory/develop/tutorial-v2-react)
- [Single sign-on with MSAL.js](https://learn.microsoft.com/en-us/azure/active-directory/develop/msal-js-sson)