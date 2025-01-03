# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug involving the `useEffect` hook.  The bug is caused by an infinite render loop due to a missing dependency in the `useEffect` hook's dependency array.

## Bug Description
The `useEffect` hook is designed to perform side effects after a component renders. However, if a variable used within the effect is not included in the dependency array, the effect will run on every render, potentially leading to an infinite loop.

## How to Reproduce
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the console output; you will see an infinite loop of log messages, indicating the `useEffect` hook is running repeatedly.

## Solution
The solution is to add the relevant variables (that are causing change within the useEffect) to the dependency array of the `useEffect` hook.