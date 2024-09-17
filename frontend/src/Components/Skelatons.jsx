import Skeleton from "react-loading-skeleton";

export const EventCardSkeleton = (index) => {
  return (
    <div
      key={index}
      className="bg-white w-64 h-[400px] md:w-96 rounded-lg shadow-lg"
    >
      {/* Skeleton for Image */}
      <div className="-mt-1">
        <Skeleton className="w-full h-48 rounded-t-lg" />
      </div>
      <div className="p-4">
        {/* Skeleton for Title */}
        <Skeleton width="80%" height={24} className="mb-4" />
        {/* Skeleton for Date and Location */}
        <div className="text-gray-600 text-sm flex flex-col space-y-2 mb-2">
          <Skeleton width="50%" height={15} />
        </div>
        {/* Skeleton for Description */}
        <Skeleton width="100%" height={20} count={3} />
      </div>
    </div>
  );
};
