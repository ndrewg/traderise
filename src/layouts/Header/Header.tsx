import Logo from '@/layouts/Header/Logo';
import SearchField from '@/layouts/Header/SearchField';
import Cta from '@/layouts/Header/Cta';

const Header = () => {
  return (
    <header className='w-full px-10 py-6 bg-white flex justify-between'>
      <Logo />
      <SearchField />
      <Cta />
    </header>
  );
};

export default Header;
