import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';

const Feed = () => {
  return (
    <div className='col-start-4 col-span-5 pt-8 px-8'>
      <Card className='p-5 bg-[white] border-[1px] border-solid border-[#e6e6e6] rounded-xl'>
        <CardHeader className='p-0 flex-row items-center space-y-0'>
          <div className='w-11 h-11 rounded-full overflow-hidden'>
            <img src='/card-img4.png' alt='' />
          </div>
          <div className='flex ml-3 gap-2'>
            <p className='text-sm font-semibold not-italic text-center text-dark leading-[1.29]'>
              lewishamilton
            </p>
            <p className='text-sm text-[#8e8e8e]'>• 5h</p>
          </div>
          <div className='py-2 flex gap-5 ml-auto'>
            <Popover>
              <PopoverTrigger>
                <div className='p-0'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={25}
                    height={24}
                    fill='none'
                  >
                    <path
                      stroke='#1E1E1E'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2.5}
                      d='M12.5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm7 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-14 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z'
                    />
                  </svg>
                </div>
              </PopoverTrigger>
              <PopoverContent className='w-[280px] p-0 bg-[white] border-[1px] border-[#e6e6e6]'>
                <div className='flex items-center p-5'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={20}
                    height={20}
                    fill='none'
                  >
                    <path
                      stroke='#5A62E8'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='m5.836 14.167 8.333-8.333m0 0H5.836m8.333 0v8.333'
                    />
                  </svg>
                  <p className='text-sm font-semibold text-primary ml-2'>
                    Reanalyze
                  </p>
                </div>
                <div className='flex items-center p-5'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={20}
                    height={20}
                    fill='none'
                  >
                    <path
                      stroke='#5A62E8'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3.336 10v6.666a1.667 1.667 0 0 0 1.667 1.667h10a1.666 1.666 0 0 0 1.666-1.667V9.999m-3.333-5-3.333-3.333m0 0L6.669 4.999m3.334-3.333v10.833'
                    />
                  </svg>
                  <p className='text-sm font-semibold text-primary ml-2'>
                    Share
                  </p>
                </div>
                <div className='flex items-center p-5'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={20}
                    height={20}
                    fill='none'
                  >
                    <path
                      stroke='#5A62E8'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M14.167 17.5v-6.667H5.833V17.5m0-15v4.167H12.5M15.833 17.5H4.167A1.667 1.667 0 0 1 2.5 15.833V4.167A1.667 1.667 0 0 1 4.167 2.5h9.166L17.5 6.667v9.166a1.666 1.666 0 0 1-1.667 1.667z'
                    />
                  </svg>
                  <p className='text-sm font-semibold text-primary ml-2'>
                    Save
                  </p>
                </div>
                <span className='w-full h-[1px] bg-[#e6e6e6] block' />
                <div className='flex items-center p-5'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={20}
                    height={20}
                    fill='none'
                  >
                    <g clipPath='url(#a)'>
                      <path
                        stroke='#262626'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='m18.33 1.666-9.166 9.167m9.167-9.167-5.834 16.667-3.333-7.5m9.167-9.167L1.664 7.499l7.5 3.334'
                      />
                    </g>
                    <defs>
                      <clipPath id='a'>
                        <path fill='#fff' d='M0 0h20v20H0z' />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className='text-sm font-semibold text-dark ml-2'>Send</p>
                </div>
                <div className='flex items-center p-5'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={20}
                    height={20}
                    fill='none'
                  >
                    <path
                      stroke='#262626'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='m15.83 17.5-5.833-4.167L4.164 17.5V4.167A1.667 1.667 0 0 1 5.831 2.5h8.333a1.667 1.667 0 0 1 1.667 1.667V17.5z'
                    />
                  </svg>
                  <p className='text-sm font-semibold text-dark ml-2'>Save</p>
                </div>
              </PopoverContent>
            </Popover>
            <Button className='p-0'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={25}
                height={24}
                fill='none'
              >
                <path
                  stroke='#1E1E1E'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2.5}
                  d='m18.5 6-12 12m0-12 12 12'
                />
              </svg>
            </Button>
          </div>
        </CardHeader>
        <CardContent className='p-0'>
          <p className='text-sm font-medium text-[#0f1419] py-4'>
            What do you think about this analysis?
          </p>
          <div>
            <img src='/markus-winkler.jpg' alt='' />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Feed;
