import React from "react";

/**
 * CustomerStoryMetrics - A dynamic metrics/info bar for customer stories.
 * @param {Object} props
 * @param {Array<{label: string, value: string}>} props.metrics - Array of metrics to display
 */
export default function CustomerStoryMetrics({ metrics = [] }) {
  if (!metrics.length) return null;
  return (
    <div className="bg-[#0A2E3D] rounded-2xl flex flex-col md:flex-row items-stretch justify-between px-4 py-8 md:py-12 md:px-8 w-full max-w-6xl mx-auto shadow-md border border-[#183b4d]">
      <div className="flex flex-col md:flex-row w-full">
        {metrics.map((metric, idx) => (
          <React.Fragment key={idx}>
            <div className={`flex-1 flex flex-col justify-center px-2 py-4 md:py-0 md:px-3`}> 
              {/* Mobile: value above label, both left-aligned; md+: label above value, left/center/right aligned */}
              <span className="block text-base font-bold text-white mb-0.5 md:hidden text-left" style={{fontFamily: 'Inter, sans-serif', lineHeight: 1.15}}>{metric.value}</span>
              <span className="block text-xs font-normal tracking-widest text-white/80 mb-1 uppercase md:hidden text-left" style={{letterSpacing: '0.06em'}}>{metric.label}</span>
              {/* Desktop: label above value, alignment as before */}
              <span className={`hidden md:block text-xs md:text-sm font-normal tracking-widest text-white/80 mb-1 uppercase md:text-${idx === 0 ? 'left' : idx === metrics.length - 1 ? 'right' : 'center'}`} style={{letterSpacing: '0.06em'}}>{metric.label}</span>
              <span className={`hidden md:block text-xl font-semibold text-white mt-0.5 md:text-${idx === 0 ? 'left' : idx === metrics.length - 1 ? 'right' : 'center'}`} style={{fontFamily: 'Inter, sans-serif', lineHeight: 1.15}}>{metric.value}</span>
            </div>
            {/* Divider except after last item, only on md+ */}
            {idx < metrics.length - 1 && (
              <div className="hidden md:block w-px bg-white/20 mx-3 my-2" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
} 
