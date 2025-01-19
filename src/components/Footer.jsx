import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="flex flex-col p-8 md:p-20 bg-neutral-200 dark:bg-neutral-950"dangerouslySetInnerHTML={{ __html: t('footer') }}></footer>
  );
};

export default Footer;
