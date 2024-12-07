The correct approach involves nesting the component within a route that defines the parameters.  This ensures that `useParams` can access the correct parameter values.

```javascript
import { BrowserRouter, Routes, Route, useParams, Outlet } from 'react-router-dom';

function MyComponent() {
  const { id } = useParams();
  return <div>ID: {id}</div>;
}

function ParentComponent() {
  return (
    <Routes>
      <Route path="/:id" element={<MyComponent />}>
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ParentComponent/>
    </BrowserRouter>
  );
}
export default App;
```
This updated code places `MyComponent` within a route that defines the `:id` parameter.  Now `useParams` will correctly extract the parameter from the URL.