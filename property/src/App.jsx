import React from "react";
import { HashRouter } from "react-router-dom";

const AppShell = React.lazy(() => import("appshell/StandardLayout"));

import {Photos} from './Photos';

function App() {
  return (
    <HashRouter>
      <React.Suspense fallback={null}>
        <AppShell title="Property Details Page">
          <h3>Property Details</h3>
          <Photos />
        </AppShell>
      </React.Suspense>
    </HashRouter>
  );
}

export default App;
