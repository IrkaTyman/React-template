import block from 'bem-css-modules';

import {CssModule} from '../types/CssModule';
import {mixClasses} from './mixClasses';
import {BemModificator} from '../types/BemModificator';

export function getBemClasses(
    cssModule: CssModule,
    subElementName?: string | null,
    modificator?: BemModificator | null,
    ...extraClasses: Array<string | undefined | null>
): string {
    if (Object.keys(cssModule).length === 0) {
        return mixClasses(
            ...extraClasses,
        );
    }

    const generator = block(cssModule);

    let generatedClasses: string;
    if (subElementName != null && modificator != null) {
        generatedClasses = generator(subElementName, modificator);
    } else if (subElementName != null) {
        generatedClasses = generator(subElementName);
    } else if (modificator != null) {
        generatedClasses = generator(modificator);
    } else {
        generatedClasses = generator();
    }

    return mixClasses(
        generatedClasses,
        ...extraClasses,
    );
}