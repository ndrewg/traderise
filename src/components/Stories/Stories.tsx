import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Feed from '@/components/Feed/Feed';

const Stories = () => {
  return (
    <div className='col-start-4 col-span-5 pt-6 overflow-hidden'>
      <div className='flex gap-[11px]'>
        {/* main story  */}
        <Card className='w-[160px] flex-shrink-0 border-0 rounded-xl shadow-none relative before:content-[""] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.2)] before:z-[1]'>
          <img
            src='/card-parent.png'
            alt='main'
            className='h-full object-cover'
          />
          <Button className='p-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center absolute -right-1 -bottom-1 border-[4px] border-main-bg border-solid z-10'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={24}
              height={24}
              fill='none'
            >
              <path
                stroke='#fff'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2.5}
                d='M12 5v14m-7-7h14'
              />
            </svg>
          </Button>
        </Card>
        <Card className='w-[160px] flex-shrink-0 border-0 rounded-xl overflow-hidden shadow-none relative before:content-[""] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.2)] before:z-[1]'>
          <div className='w-12 h-12 rounded-full border-[4px] border-primary absolute top-3 left-3 z-10'>
            <img src='/card-user1.png' alt='' />
          </div>
          <img
            src='/card-img1.jpg'
            alt='main'
            className='h-full object-cover'
          />
        </Card>
        <Card className='w-[160px] flex-shrink-0 border-0 rounded-xl overflow-hidden shadow-none relative before:content-[""] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.2)] before:z-[1]'>
          <div className='w-12 h-12 rounded-full border-[4px] border-primary absolute top-3 left-3 z-10'>
            <img src='/card-user2.png' alt='' />
          </div>
          <img
            src='/card-img2.jpg'
            alt='main'
            className='h-full object-cover'
          />
        </Card>
        <Card className='w-[160px] flex-shrink-0 border-0 rounded-xl overflow-hidden shadow-none relative before:content-[""] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.2)] before:z-[1]'>
          <div className='w-12 h-12 rounded-full border-[4px] border-primary absolute top-3 left-3 z-10'>
            <img src='/card-user3.png' alt='' />
          </div>
          <img
            src='/card-img3.jpg'
            alt='main'
            className='h-full object-cover'
          />
        </Card>
      </div>
      <Feed />
    </div>
  );
};

export default Stories;
