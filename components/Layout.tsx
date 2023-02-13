import Footer from './Footer';
import SoundPlayer from '../components/SoundPlayer';

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <SoundPlayer />
      <Footer />
    </>
  );
};

export default Layout;
