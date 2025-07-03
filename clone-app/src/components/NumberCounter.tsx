
"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

type NumberCounterProps = {
  end: number;
  duration?: number;
  title?: string;
  prefix?: string;
  suffix?: string;
};

const NumberCounter = ({
  end,
  duration = 2,
  title,
  prefix = "",
  suffix = "",
}: NumberCounterProps) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const formattedEnd = end.toLocaleString();

  return (
    <div
      ref={ref}
      className="text-center p-6 bg-gray-900 text-white rounded-2xl shadow-xl transition-all duration-700"
    >
      {title && <h2 className="text-xl font-semibold mb-2">{title}</h2>}
      <div className="text-5xl font-bold">
        {inView ? (
          <CountUp
            end={end}
            duration={duration}
            prefix={prefix}
            suffix={suffix}
            separator=","
            decimals={0}
          />
        ) : (
          <span>{formattedEnd}</span>
        )}
      </div>
    </div>
  );
};

export default NumberCounter;
