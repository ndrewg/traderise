import { Button } from '@/components/ui/button';

const Cta = () => {
  return (
    <div className='flex items-center'>
      <Button className='bg-gradient-to-b from-primary to-gradient-stop rounded-[40px] px-5 py-3 gap-2 w-auto h-auto'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width={20}
          height={20}
          fill='none'
          className='text-[white]'
        >
          <path
            stroke='#fff'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M10 6.667v6.666M6.667 10h6.666M4.167 2.5h11.666c.92 0 1.667.746 1.667 1.667v11.666c0 .92-.746 1.667-1.667 1.667H4.167c-.92 0-1.667-.746-1.667-1.667V4.167c0-.92.746-1.667 1.667-1.667z'
          />
        </svg>
        <span className='text-[white] text-base font-[500]'>Create</span>
      </Button>
      <Button className='p-0 w-auto h-auto mr-6 ml-9'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width={32}
          height={32}
          fill='none'
        >
          <path
            stroke='#262626'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2.5}
            d='M28 15.333a11.173 11.173 0 0 1-1.2 5.067 11.333 11.333 0 0 1-10.133 6.267 11.173 11.173 0 0 1-5.067-1.2L4 28l2.533-7.6a11.173 11.173 0 0 1-1.2-5.067A11.333 11.333 0 0 1 11.6 5.2 11.173 11.173 0 0 1 16.667 4h.666A11.306 11.306 0 0 1 28 14.667v.666z'
          />
        </svg>
      </Button>
      <Button className='p-0 w-11 h-11 rounded-full overflow-hidden'>
        <img src='/header-img@3x.webp' alt='User' />
      </Button>
    </div>
  );
};

export default Cta;
