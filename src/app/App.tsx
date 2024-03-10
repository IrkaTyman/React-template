import '@shared/styles/index.css';
import { useTranslation } from 'react-i18next';

import { AppRouter } from './provides/router/AppRouter';

const App = () => {
    const { t } = useTranslation();
    return (
        <div>
            <AppRouter />
            {t('a')}
        </div>
    );
};

export default App;
