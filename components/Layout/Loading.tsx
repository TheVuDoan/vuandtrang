import { HeartIcon } from '@heroicons/react/24/outline';

const Loading = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <HeartIcon className="animate-bounce h-10 w-10 text-[#ee9492]" />
    </div>
  );
};

export default Loading;
  