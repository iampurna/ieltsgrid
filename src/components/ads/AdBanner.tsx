// import { cn } from "@/lib/utils";

// interface AdBannerProps {
//   size: "728x90" | "300x250" | "336x280" | "160x600";
//   className?: string;
//   slot?: string;
// }

// export default function AdBanner({ size, className, slot }: AdBannerProps) {
//   const dimensions = {
//     "728x90": { width: 728, height: 90 },
//     "300x250": { width: 300, height: 250 },
//     "336x280": { width: 336, height: 280 },
//     "160x600": { width: 160, height: 600 },
//   };

//   const { width, height } = dimensions[size];

//   return (
//     <div
//       className={cn(
//         "flex justify-center items-center bg-gray-50 border border-gray-200 rounded-lg",
//         className
//       )}
//     >
//       <div
//         style={{ width: `${width}px`, height: `${height}px` }}
//         className="flex items-center justify-center text-gray-400 text-sm"
//       >
//         {/* AdSense script will be inserted here in production */}
//         <div className="text-center">
//           <div className="text-xs opacity-75">Advertisement</div>
//           <div className="text-xs mt-1">{size}</div>
//         </div>
//       </div>
//     </div>
//   );
// }

interface AdBannerProps {
  size: "728x90" | "300x250" | "336x280" | "160x600";
  className?: string;
  slot?: string;
}

export default function AdBanner({ size, className, slot }: AdBannerProps) {
  // Temporarily disabled for Phase 1 - no ads until traffic builds up
  return null;

  /* 
  // Uncomment when ready to add ads
  const dimensions = {
    '728x90': { width: 728, height: 90 },
    '300x250': { width: 300, height: 250 },
    '336x280': { width: 336, height: 280 },
    '160x600': { width: 160, height: 600 }
  };

  const { width, height } = dimensions[size];

  return (
    <div className={cn('flex justify-center items-center bg-gray-50 border border-gray-200 rounded-lg', className)}>
      <div
        style={{ width: `${width}px`, height: `${height}px` }}
        className="flex items-center justify-center text-gray-400 text-sm"
      >
        <div className="text-center">
          <div className="text-xs opacity-75">Advertisement</div>
          <div className="text-xs mt-1">{size}</div>
        </div>
      </div>
    </div>
  );
  */
}
