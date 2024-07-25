import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { usePosts } from '@/hooks/usePosts';
import PostCTA from '@/components/PostCTA/PostCTA';

export type Post = {
  userId: number;
  userImage: string;
  username: string;
  description: string;
  image: string;
  date: string;
};

const Feed = () => {
  const { posts, loading } = usePosts();

  return (
    <div className='col-start-4 col-span-5 pt-8 px-8 flex flex-col gap-5 pb-10'>
      {posts &&
        posts.map((post) => {
          return (
            <Card className='p-5 bg-[white] border-[1px] border-solid border-[#e6e6e6] rounded-xl'>
              <CardHeader className='p-0 flex-row items-center space-y-0'>
                <div className='w-11 h-11 rounded-full overflow-hidden'>
                  <img src={post.userImage} alt='' />
                </div>
                <div className='flex ml-3 gap-2'>
                  <p className='text-sm font-semibold not-italic text-center text-dark leading-[1.29]'>
                    {post.username}
                  </p>
                  <p className='text-sm text-[#8e8e8e]'>{post.date}</p>
                </div>
                <div className='py-2 flex gap-5 ml-auto'>
                  <PostCTA />
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
                  {post.description}
                </p>
                <div>
                  <img src={post.image} alt='' />
                </div>
              </CardContent>
            </Card>
          );
        })}
      {loading && (
        <Card className='p-5 bg-[white] border-[1px] border-solid border-[#e6e6e6] rounded-xl'>
          <CardHeader className='p-0 flex-row items-center space-y-0'>
            <div className='w-11 h-11 rounded-full overflow-hidden'>
              <div className='w-full h-full bg-light-grey animate-pulse' />
            </div>
            <div className='flex ml-3 gap-2'>
              <p className='text-sm font-semibold not-italic text-center text-dark leading-[1.29]'>
                <div className='w-5 h-5 bg-light-grey animate-pulse' />
              </p>
              <p className='text-sm text-[#8e8e8e]'>
                <div className='w-5 h-5 bg-light-grey animate-pulse' />
              </p>
            </div>
            <div className='py-2 flex gap-5 ml-auto'>
              <PostCTA />
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
              <div className='w-5 h-5 bg-light-grey animate-pulse' />
            </p>
            <div>
              <div className='w-full h-5 bg-light-grey animate-pulse' />
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Feed;
