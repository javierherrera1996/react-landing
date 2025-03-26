import {FC, memo, PropsWithChildren} from 'react';

const Page: FC<PropsWithChildren> = memo(({children}) => {
  return <div className="relative">{children}</div>;
});

Page.displayName = 'Page';
export default Page;
