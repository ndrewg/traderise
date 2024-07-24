const Logo = () => {
  return (
    <a href='#' className='flex gap-1 items-center flex-shrink-0'>
      <img src='/logo.webp' alt='Traderise logo' />
      <p className='w-24 h-8 flex-grow-0 text-2xl font-semibold text-[#4e4e4e]'>
        Trade
        <span className='text-primary'>rise</span>
      </p>
    </a>
  );
};

export default Logo;
