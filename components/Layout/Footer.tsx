import { footer } from '../../utils/config';

const Footer = () => {
  return (
    <footer className="p-4 md:px-6 md:py-8">
      <span className="block text-sm text-gray-500 text-center"><i>{footer}</i></span>
    </footer>
  );
};

export default Footer;
