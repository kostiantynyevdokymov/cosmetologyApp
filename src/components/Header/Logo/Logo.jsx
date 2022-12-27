// import { Link } from 'react-router-dom';
import logoMain from '../../../images/logo/EvOl.png';
import { Logo } from './Logo.styled';
export const LogoApp = () => {
  const takeLogo = () => {
    return logoMain;
  };

  return (
    <>
      <Logo src={takeLogo()} />
    </>
  );
};
