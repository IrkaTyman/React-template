import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App';
import '@shared/config/i18n';
import { ErrorBoundary } from '@app/providers/ErrorBoundary';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@shared/config/query/queryClient';

const root = createRoot(document.getElementById('root')!);
root.render(
    <ErrorBoundary>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <App/>
            </QueryClientProvider>
        </BrowserRouter>
    </ErrorBoundary>,
);
