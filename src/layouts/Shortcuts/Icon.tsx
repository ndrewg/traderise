import { Button } from '@/components/ui/button';
import {
  HomeIcon,
  FollowingIcon,
  ChartsIcon,
  ExploreIcon,
  CoursesIcon,
  CreateIcon,
} from '@/layouts/Shortcuts/Icons';
import { capitalizeFirstLetter } from '@/lib/string';
import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes } from 'react';

export enum IconTypes {
  home = 'home',
  following = 'following',
  explore = 'explore',
  courses = 'courses',
  charts = 'charts',
  create = 'create',
}

const getIcon = (iconType = IconTypes.home): typeof HomeIcon => {
  return {
    [IconTypes.home]: HomeIcon,
    [IconTypes.following]: FollowingIcon,
    [IconTypes.explore]: ExploreIcon,
    [IconTypes.courses]: CoursesIcon,
    [IconTypes.charts]: ChartsIcon,
    [IconTypes.create]: CreateIcon,
  }[iconType];
};

type IconProps = {
  className?: string;
  icon?: IconTypes;
  title?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Icon = ({ icon, title, className, ...props }: IconProps) => {
  const CustomIcon = getIcon(icon);
  const classNames = cn('flex p-0 w-auto h-auto items-center gap-2', className);

  return (
    <Button className={classNames} {...props}>
      <CustomIcon />
      <span className='text-base leading-[normal] text-dark group-has-[text-primary]:text-primary'>
        {title && capitalizeFirstLetter(title)}
      </span>
      {icon === IconTypes.courses && (
        <span className='ml-3 w-2 h-2 border-l-[1px] border-solid border-l-[#262626] border-b-[1px] border-b-[#262626] -rotate-45' />
      )}
    </Button>
  );
};
