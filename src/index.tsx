import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App';
import '@shared/config/i18n';
import { ErrorBoundary } from '@app/providers/ErrorBoundary';

const root = createRoot(document.getElementById('root')!);
root.render(
    <ErrorBoundary>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </ErrorBoundary>,
);
