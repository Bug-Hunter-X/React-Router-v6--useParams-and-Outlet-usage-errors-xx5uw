In React Router Dom v6, a common mistake is incorrectly using the `useParams` hook or the `Outlet` component within a component that doesn't exist within a route hierarchy.  This can lead to unexpected behavior, such as the parameters not being accessible or the child routes not rendering correctly. For example:
```javascript
// Incorrect usage
function MyComponent() {
  const { id } = useParams();
  return <div>ID: {id}</div>;
}
```
This `MyComponent` will not receive any params if not nested within a route path that uses the `:id` parameter. 