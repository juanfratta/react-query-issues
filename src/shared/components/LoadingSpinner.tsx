import { FiRefreshCcw } from "react-icons/fi";

export const LoadingSpinner = ({ size }: { size: number }) => {
  return (
    <div className="loadingF">
      <div className="flex w-full h-52 justify-center items-center">
        <FiRefreshCcw size={size} className="animate-spin" />
      </div>
    </div>
  );
};
