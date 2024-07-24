import { Input } from '@/components/ui/input';

const SearchField = () => {
  return (
    <div className='relative w-[30%] rounded-[40px] overflow-hidden'>
      <form className='w-full'>
        <Input
          type='text'
          placeholder='Search...'
          className='w-full h-auto text-sm py-[15px] leading-tight px-[16px] border-[1px] border-[#d0d0d0] border-solid rounded-[40px] pr-[60px]'
        />
        <button className='absolute right-5 top-1/2 -translate-y-1/2 h-full py-3 before:content-["|"] before:absolute before:-left-[20px] before:top-1/2 before:-translate-y-1/2 before:text-[#d0d0d0]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={25}
            height={24}
            fill='none'
          >
            <path
              stroke='#848484'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='m21.18 21-4.35-4.35M19.18 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0z'
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default SearchField;
