import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Suggestions = () => {
  return (
    <div className='col-start-10 col-span-3 pl-12 pt-6 max-[1366px]:hidden'>
      <Card className='p-4 rounded-xl bg-[white] border-0'>
        <CardHeader className='flex-row p-0 justify-between space-y-0'>
          <p className='text-sm font-semibold leading-[1.29] text-[#787878]'>
            Suggested for you
          </p>
          <Button className='text-sm font-semibold leading-[1.14] text-[#787878] p-0 h-auto'>
            See all
          </Button>
        </CardHeader>
        <CardContent className='p-0'>
          <ul className='flex flex-col mt-6 gap-4'>
            <li className='flex items-center'>
              <div className='w-11 h-11 rounded-full mr-3 flex-shrink-0'>
                <img src='/avatar-img1.png' alt='' />
              </div>
              <div className='flex flex-col'>
                <p className='text-sm font-semibold leading-[1.29] text-[#262626]'>
                  username
                </p>
                <p className='text-sm leading-[1.29] text-[#8e8e8e] break-all'>
                  descriptiondescription
                </p>
              </div>
              <Button className='ml-0 p-0 py-1 px-4 border-primary border-[1px] rounded-full text-primary text-sm font-semibold leading-[1.29]'>
                Follow
              </Button>
            </li>
            <li className='flex items-center'>
              <div className='w-11 h-11 rounded-full mr-3 flex-shrink-0'>
                <img src='/avatar-img1.png' alt='' />
              </div>
              <div className='flex flex-col'>
                <p className='text-sm font-semibold leading-[1.29] text-[#262626]'>
                  username
                </p>
                <p className='text-sm leading-[1.29] text-[#8e8e8e] break-all'>
                  descriptiondescription
                </p>
              </div>
              <Button className='ml-0 p-0 py-1 px-4 border-primary border-[1px] rounded-full text-primary text-sm font-semibold leading-[1.29]'>
                Follow
              </Button>
            </li>
            <li className='flex items-center'>
              <div className='w-11 h-11 rounded-full mr-3 flex-shrink-0'>
                <img src='/avatar-img1.png' alt='' />
              </div>
              <div className='flex flex-col'>
                <p className='text-sm font-semibold leading-[1.29] text-[#262626]'>
                  username
                </p>
                <p className='text-sm leading-[1.29] text-[#8e8e8e] break-all'>
                  descriptiondescription
                </p>
              </div>
              <Button className='ml-0 p-0 py-1 px-4 border-primary border-[1px] rounded-full text-primary text-sm font-semibold leading-[1.29]'>
                Follow
              </Button>
            </li>
            <li className='flex items-center'>
              <div className='w-11 h-11 rounded-full mr-3 flex-shrink-0'>
                <img src='/avatar-img1.png' alt='' />
              </div>
              <div className='flex flex-col'>
                <p className='text-sm font-semibold leading-[1.29] text-[#262626]'>
                  username
                </p>
                <p className='text-sm leading-[1.29] text-[#8e8e8e] break-all'>
                  descriptiondescription
                </p>
              </div>
              <Button className='ml-0 p-0 py-1 px-4 border-primary border-[1px] rounded-full text-primary text-sm font-semibold leading-[1.29]'>
                Follow
              </Button>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Suggestions;
