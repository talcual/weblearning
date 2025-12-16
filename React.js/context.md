
# Context example

Primero definimos un contexto.

```jsx
import { createContext } from "react";

export const UserContext = createContext(null);
```



Pasamos a proveer el contexto
```jsx
import { UserContext } from "./UserContext";

function App() {
  const user = { name: "Luis", role: "admin" };

  return (
    <UserContext.Provider value={user}>
      <Layout />
    </UserContext.Provider>
  );
}
```


Implementamos el contexto.
```jsx
import { useContext } from "react";
import { UserContext } from "./UserContext";

function UserMenu() {
  const user = useContext(UserContext);

  return <p>Hola, {user.name}</p>;
}
```
