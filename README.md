# React Router v6: useParams and Outlet Usage Errors

This repository demonstrates a common error when using the `useParams` hook and `Outlet` component in React Router v6.  The error arises from using these components outside of a properly defined route hierarchy, leading to unexpected behavior such as missing parameters or non-rendering child routes.

## Bug Description
The `bug.js` file contains an example of incorrect usage. `useParams` and `Outlet` are used within a component not nested within routes that define the parameters and child routes. 

## Solution
The `bugSolution.js` file demonstrates the correct usage.  The components are properly nested to ensure correct access to parameters and child route rendering.

## How to run
1. Clone this repo
2. `npm install`
3. `npm start`