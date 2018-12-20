import React from 'react';
import '@/config/lib/i18n';
import { withNamespaces } from 'react-i18next';

/**
 * I'm just a little loading info.
 */
export default withNamespaces('core')(function ({ t }) {
  return (<div>{t('Wait a moment...')}</div>);
});
