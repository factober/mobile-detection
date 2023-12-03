export function isMobile() {
  const mobileKeywords =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  // Check for touch events also because navigator.userAgent is not reliable.
  const touchSupport = "ontouchstart" in window || navigator.maxTouchPoints > 0;

  return mobileKeywords || touchSupport;
}
