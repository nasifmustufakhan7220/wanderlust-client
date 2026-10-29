// DestinationSkeleton.tsx
type Props = {
  count: number;
};

export default function DestinationSkeleton({ count }: Props) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }, (_, index) => (
        <div
          key={index}
          className="animate-pulse rounded-md border border-gray-200 bg-white p-4 shadow-sm"
        >
          <div className="h-55 w-full rounded bg-gray-200" />

          <div className="mt-3 h-3 w-24 rounded bg-gray-200" />

          <div className="mt-3 flex justify-between gap-4">
            <div className="h-4 w-32 rounded bg-gray-200" />
            <div className="h-4 w-20 rounded bg-gray-200" />
          </div>

          <div className="mt-3 h-3 w-28 rounded bg-gray-200" />
          <div className="mt-3 h-3 w-20 rounded bg-gray-200" />
        </div>
      ))}
    </div>
  );
}