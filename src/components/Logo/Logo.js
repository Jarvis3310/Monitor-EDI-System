// material-ui
import AvengersLogo from 'assets/images/icons/Avengers-Logo.png';
/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {

  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={logo} alt="Mantis" width="100" />
     * {<img src={AvengersLogo} alt="AvengersLogo" width="100" />}
     *
     */
   <img src={AvengersLogo} alt="AvengersLogo" width="100" />
  );
};

export default Logo;
