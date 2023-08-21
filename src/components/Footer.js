import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className='fontStyle'>&copy; © 2023 BrainBites. All Rights Reserved.
This website and its content are protected by copyright law and international treaties. Unauthorized reproduction or distribution of any portion of this website's content may result in severe civil and criminal penalties, and will be prosecuted to the maximum extent possible under the law.

All book covers, titles, and author names are the property of their respective owners. The inclusion of any book cover, title, or author name on this website does not imply endorsement or affiliation with BrainBites.

For inquiries regarding the use of content from this website, please contact us at brainBites@gmail.com.
.</p>
        {/* Add social network icons and email address */}
      </div>
    </footer>
  );
};

export default Footer;
