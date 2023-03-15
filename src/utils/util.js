/**
 * @description: to know the y position and return the number to prove which current position is in the box
 * @param {double} number
 * @return {string}
 */
export function getDetailInBox(number) {
  if (number < 250) {
    // information
    return "Information";
  } else if (number < 660) {
    // skills
    return "Skills";
  } else if (number < 1157) {
    // projects
    return "Projects";
  } else if (number < 1680) {
    // interest
    return "Interest";
  } else if (number < 2199) {
    // contact
    return "Contact";
  } else if (number < 2668) {
    // cv
    return "CV";
  }
  return "Information";
}

/**
 * @description: detect device type, d: desktop, t: tablet, m: mobile
 * @param {string} userAgent
 * @return {string}
 */
export function detectDeviceType(userAgent) {
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent
    );
  const isTablet = /iPad/i.test(userAgent);
  const isDesktop = !isMobile && !isTablet;

  if (isDesktop) {
    return "d";
  } else if (isTablet) {
    return "t";
  } else if (isMobile) {
    return "m";
  }
}
