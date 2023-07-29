import { PropsWithChildren } from 'react';

import Header from './header';

interface InternalLayoutProps {}
type LayoutProps = PropsWithChildren<InternalLayoutProps>;

export default function BaseLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main style={{ display: 'flex', flexDirection: 'row' }}>
        <section>{children}</section>
      </main>
    </>
  );
}
