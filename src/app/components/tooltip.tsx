import { ReactNode } from "react";

const Tooltip: React.FC<{children: ReactNode; text: string}> = ({children, text}) => {
  return (
    <div className="group relative inline-block">
      <button>{children}</button>
      <span className="invisible group-hover:visible absolute bg-gray-800 text-white text-xs rounded py-1 px-2 -mt-8 -ml-4 z-10">
        {text}
      </span>
    </div>
  );
}

export default Tooltip;
