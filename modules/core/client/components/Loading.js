import React from 'react';
import '@/config/client/i18n';
import { withNamespaces } from 'react-i18next';

/**
 * I'm just a little loading info.
 */
export default withNamespaces('core')(({ t }) => (
  <div>{t('Wait a moment...')}</div>
));
