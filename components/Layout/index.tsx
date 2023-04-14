import Footer from './Footer';
import SoundPlayer from './SoundPlayer';
import ScrollToTop from './ScrollToTop';

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <SoundPlayer />
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Layout;
