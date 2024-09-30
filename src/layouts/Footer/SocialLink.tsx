import React, { ReactNode } from 'react';

interface SocialLinksProps {
  href: string;
  children: ReactNode;
}

const SocialLink: React.FC<SocialLinksProps> = ({ href, children }) => (
	<a href={href} className="me-6 [&>svg]:h-4 [&>svg]:w-4">
	  {children}
	</a>
  );

  export default  SocialLink;