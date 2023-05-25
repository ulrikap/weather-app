import Header from "@/ui/compositions/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header title="Dashboard"/>
      {children}
    </>
  );
};

export default Layout;
