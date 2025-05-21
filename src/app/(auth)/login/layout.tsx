

import layoutStyles from "./layout.module.scss";

const Layout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <main className={`${layoutStyles.login}`}>
      {children}
    </main>
  );
};

export default Layout;