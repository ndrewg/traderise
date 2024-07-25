import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Feed from '@/components/Feed/Feed';
import { useStories } from '@/hooks/useStories';

export type Story = {
  userId: number;
  imageUrl: string;
  story: string;
};

const Stories = () => {
  const { stories, isLoading, error } = useStories();

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
        {/* user stories */}
        {stories &&
          stories.map((story, index) => {
            return (
              <Card
                key={index}
                className='w-[160px] flex-shrink-0 border-0 rounded-xl overflow-hidden shadow-none relative before:content-[""] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.2)] before:z-[1]'
              >
                <div className='w-12 h-12 rounded-full border-[4px] border-primary absolute top-3 left-3 z-10'>
                  <img src={story.imageUrl} alt='' />
                </div>
                <img
                  src={story.story}
                  alt='main'
                  className='h-full object-cover'
                />
              </Card>
            );
          })}
        {isLoading && (
          <Card className='w-[160px] flex-shrink-0 border-0 rounded-xl overflow-hidden shadow-none relative before:content-[""] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.2)] before:z-[1]'>
            <div className='w-12 h-12 rounded-full border-[4px] border-primary absolute top-3 left-3 z-10'>
              <div className='w-full h-full rounded-full bg-light-grey animate-pulse' />
            </div>
            <div className='w-full h-full bg-light-grey animate-pulse' />
          </Card>
        )}
        {error && (
          <Card className='w-[160px] flex-shrink-0 border-0 rounded-xl overflow-hidden shadow-none relative before:content-[""] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.2)] before:z-[1]'>
            <div className='w-12 h-12 rounded-full border-[4px] border-primary absolute top-3 left-3 z-10'>
              <div className='w-full h-full rounded-full bg-light-grey animate-pulse' />
            </div>
            <div className='w-full h-full bg-light-grey animate-pulse flex items-center justify-center'>
              <p className='font-semibold text-lg'>Add a story</p>
            </div>
          </Card>
        )}
      </div>
      <Feed />
    </div>
  );
};

export default Stories;
