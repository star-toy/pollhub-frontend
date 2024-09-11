import { useState } from 'react';
import { Button } from '@/components/shadcn-ui/ui/button';
import { PollOptionType } from '@/mock-data/post-mock-data';
import { POLL_OPTIONS } from '@/mock-data/post-mock-data';
import Overlay from '@/components/overlay';

const PollOption = () => {
  const [selectedPollOption, setSelectedPollOption] = useState<PollOptionType | null>(null);

  const handlePollOptionClick = (option: PollOptionType) => {
    setSelectedPollOption((prevOption) => (prevOption?.id === option.id ? null : option));
  };

  return (
    <div className="grid w-[358px] grid-cols-2 gap-x-[16px] gap-y-4">
      {POLL_OPTIONS.map((option) => (
        <Button
          key={option.id}
          size="pollOption"
          className={`relative flex-col overflow-hidden rounded-lg transition duration-300 ease-in-out ${
            selectedPollOption?.id === option.id && 'ring-1 ring-gray-800'
          }`}
          onClick={() => handlePollOptionClick(option)}
        >
          <img src={option.image} alt={option.content} className="h-[140px] w-full object-cover" />
          <div className="w-full rounded-b-lg border border-gray-200 bg-gray-50 px-4 py-2">
            <span
              className={`flex items-center justify-center text-caption1 transition-colors duration-300 ${
                selectedPollOption?.id === option.id ? 'text-black' : 'text-gray-700'
              }`}
            >
              {option.content}
            </span>
          </div>

          {/*전체 옵션에 대한 득표율 오버레이 */}
          <Overlay option={option} selectedPollOption={selectedPollOption} />
        </Button>
      ))}
    </div>
  );
};

export default PollOption;
