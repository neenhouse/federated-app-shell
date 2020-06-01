import React from 'react';

const AppShell = React.lazy(() => import('appshell/StandardLayout'));

import {Results} from './Results';

function App() {
    return (
        <React.Suspense fallback={null}>
            <AppShell title="Search Page">
                <Results />
            </AppShell>
        </React.Suspense>
    );
}

export default App;
