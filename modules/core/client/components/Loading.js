import React from 'react';
import '@/config/client/i18n';
import { withTranslation } from '@/modules/core/client/utils/i18n-angular-load';

/**
 * I'm just a little loading info.
 */
export default withTranslation('core')(({ t }) => (
  <div>{t('Wait a moment...')}</div>
));
