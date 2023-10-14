import { TABLET_MIN_WIDTH } from "../constants/domConstants";

export function isElementCompletelyVisible(element: HTMLElement) {
  // Get the element's position and dimensions
  const elementRect = element.getBoundingClientRect();

  // Get the viewport dimensions
  const viewportWidth =
    window.innerWidth || document.documentElement.clientWidth;
  const viewportHeight =
    window.innerHeight || document.documentElement.clientHeight;

  // Check if the element is completely within the viewport
  const isCompletelyVisible =
    elementRect.top >= 0 &&
    elementRect.left >= 0 &&
    elementRect.bottom <= viewportHeight &&
    elementRect.right <= viewportWidth;

  return isCompletelyVisible;
}

export function isSmallScreen() {
  if (window.innerWidth < TABLET_MIN_WIDTH) {
    return true;
  }
  return false;
}
