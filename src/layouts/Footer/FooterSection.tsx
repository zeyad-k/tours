import React, { ReactNode } from 'react';

interface FooterSectionProps {
  title: string;
  children: ReactNode;
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, children }) => (
  <div>
    <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
      {title}
    </h6>
    {children}
  </div>
);

export default FooterSection;
