import { Navbar, Footer } from "./index";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-primary">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 