import { Zap } from "lucide-react";

const RateLimit = () => {
  return (
    <div className="w-full flex justify-center mt-10 px-4">
      <div
        className="
          w-full max-w-3xl
          bg-gradient-to-r from-green-950/70 to-green-900/40
          border border-green-800/40
          rounded-xl
          p-6
          flex items-start gap-4
          shadow-[0_0_20px_rgba(34,197,94,0.25)]
          backdrop-blur-md
        "
      >
        {/* Icon */}
        <div
          className="
            h-12 w-12
            flex items-center justify-center
            rounded-full
            bg-green-500/20
            text-green-400
            shadow-[0_0_12px_rgba(34,197,94,0.5)]
          "
        >
          <Zap size={22} />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-green-300 font-semibold text-lg">
            Rate Limit Reached
          </h2>
          <p className="text-green-200/80 text-sm mt-1">
            You've made too many requests in a short period. Please wait a
            moment.
          </p>
          <p className="text-green-400/70 text-sm mt-2">
            Try again in a few seconds for the best experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RateLimit;
