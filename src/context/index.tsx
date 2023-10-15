import { createContext } from "react";
import { isMobileScreen, isSmallScreen } from "../utils/domUtils";

type TViewPortContext = {
  isSmallScreen: boolean;
  isMobileScreen: boolean;
};

export const ViewportContext = createContext<TViewPortContext>({
  isSmallScreen: isSmallScreen(),
  isMobileScreen: isMobileScreen(),
});
