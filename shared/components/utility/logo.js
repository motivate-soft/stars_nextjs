import React from 'react';
import { Link } from 'react-router-dom';
import siteConfig from '@iso/config/site.config';
import { IoIosFlash } from 'react-icons/io';

export default ({ collapsed }) => {
  return (
    <div className="isoLogoWrapper">
      {collapsed ? (
        <div>
          <h3>
            <Link to="/admin">
              <IoIosFlash size={27} />
            </Link>
          </h3>
        </div>
      ) : (
        <h3>
          <Link to="/admin">{siteConfig.siteName}</Link>
        </h3>
      )}
    </div>
  );
};
