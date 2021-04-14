import React from 'react';
import Head from 'next/head';

import { withAuthSync } from '@redux/authentication/auth.utils';
import DashboardLayout from '../../containers/Admin/DashboardLayout/DashboardLayout';

export default withAuthSync(() => (
  <>
    <Head>
      <title>Home page</title>
    </Head>
    <DashboardLayout>
      {/*<Dashboard />*/}
    </DashboardLayout>
  </>
));
