import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Top = () => {
  return (
    <div>
      <div className="fix flex flex-col item-center justify-center border-radius text-white absolute z-[222222] bottom-5 right-5">
        <a
          href="#top"
          className="w-[50px] h-[50px] bg-[#073233] shadow-md text-center flex justify-center item-center"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </a>
      </div>
    </div>
  );
};

export default Top;
