import { PollOptionDTO } from '@/api/generated/model';

interface OverlayProps {
  selectedPollOption: PollOptionDTO | null;
  pollOption: PollOptionDTO;
}

const Overlay = ({ selectedPollOption, pollOption }: OverlayProps) => {
  return (
    <div
      className={`absolute left-0 top-0 flex h-[140px] w-full items-center justify-center bg-banner-gradient transition duration-300 ease-in-out ${
        selectedPollOption ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="flex flex-col items-center">
        <span className="text-caption2 text-gray-50">득표율</span>
        {/* TODO: API에서 제공하는 득표율 값으로 변경 */}
        <span className="text-subTitle3 text-gray-50">{pollOption.pollOptionSeq}%</span>
      </div>
    </div>
  );
};

export default Overlay;
