import { Button } from '@/components/ui/button';
import { Icon, IconTypes } from './Icon';

const Shortcuts = () => {
  return (
    <div className='col-span-1 py-10' role='navigation'>
      <div className='flex flex-col items-start gap-10'>
        <Icon icon={IconTypes.home} title='home' />
        <Icon icon={IconTypes.following} title='following' />
        <Icon icon={IconTypes.explore} title='explore' />
        <Icon icon={IconTypes.courses} title='courses' />
        <Icon icon={IconTypes.charts} title='charts' />
        <Button className='flex p-0 w-auto h-auto items-center gap-2'>
          <div className='w-5 h-5 rounded-full overflow-hidden'>
            <img src='/header-img@3x.webp' alt='User icon' />
          </div>
          <span className='text-base leading-[normal] text-dark'>Profile</span>
        </Button>
        <Icon
          title='create'
          className='border-[1px] border-primary border-solid rounded-[40px] py-[14.5px] px-5 group *:text-primary'
          icon={IconTypes.create}
        />
      </div>
    </div>
  );
};

export default Shortcuts;
