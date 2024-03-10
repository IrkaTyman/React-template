import React from 'react';
import '@shared/styles/index.css'
import {AppRouter} from "@app/provides/router/AppRouter";
import {useTranslation} from "react-i18next";

const App = () => {
    const {t} = useTranslation()
    return (
        <div>
            <AppRouter/>
            {t('a')}
        </div>
    );
};

export default App;