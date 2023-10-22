import React from 'react';
import ContactBanner from '@/components/ContactBanner';

const Footer = () => {
  return (
    <>
      <ContactBanner />
      <div>
        <p style={{ textAlign: 'center', margin: '14px 0px' }}><small>
          Created with online inspiration and VSCODE, this website is a product of love, coffee and Next.js. It is deployed with Vercel
        </small></p>
      </div>
    </>
  );
};

export default Footer;