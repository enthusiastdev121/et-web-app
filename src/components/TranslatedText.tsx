import React from 'react'

import { Translate } from 'react-auto-translate';
import { WHITELABEL } from '../utils/envProviders';
import { WHITELABELS } from "@/utils/whitelabelConfig";


export default function TranslatedText({ children }: any) {

    if (WHITELABEL === WHITELABELS.talento) {

        return (
            <Translate>
                {children}
            </Translate>
        )
    } else {
        return children
    }
}
