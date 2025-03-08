import { FiRefreshCcw } from "react-icons/fi";

export const LoadingSpinner = ({ size }: { size: number }) => {
  return (
    <div className="loadingF">
      <div className="animate-spin">
        <FiRefreshCcw size={size} />
      </div>
    </div>
  );
};
