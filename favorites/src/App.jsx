import React from "react";
import { HashRouter } from "react-router-dom";
const AppShell = React.lazy(() => import("appshell/StandardLayout"));
import {MyTrips} from './MyTrips';

function App() {
  return (
    <HashRouter>
      <React.Suspense fallback={null}>
        <AppShell title="Favorites">
          <MyTrips />
        </AppShell>
      </React.Suspense>
    </HashRouter>
  );
}

export default App;
