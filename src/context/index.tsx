import { createContext } from "react";
import { isSmallScreen } from "../utils/domUtils";

type TViewPortContext = {
  isSmallScreen: boolean;
};

export const ViewportContext = createContext<TViewPortContext>({
  isSmallScreen: isSmallScreen(),
});
