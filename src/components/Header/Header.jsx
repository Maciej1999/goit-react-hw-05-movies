import { useState } from 'react';
import { HeaderNavBtn } from '../HeaderNavBtn/HeaderNavBtn';
import { ToggleBtn } from '../ToggleBtn/ToggleBtn';
import { useTheme } from 'components/ThemeProvider/ThemeProvider';
import { GoBackBtn } from 'components/GoBackBtn/GoBackBtn';
import css from './Header.module.css';
import { useEffect } from 'react';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isUp, setIsUp] = useState(false);
  const toggleIsUp = () => setIsUp(!isUp);

  const header = document.querySelector('.header');
  const footer = document.querySelector('.footer');
  useEffect(() => {
    if (isUp && footer) {
      footer.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [isUp, header, footer]);

  return (
    <header className={`header ${css.header} ${theme ? '' : css.themeDark}`}>
      <nav className={css.leftNav}>
        <HeaderNavBtn to="/" display="Home" />
        <HeaderNavBtn to="/movies" display="Movies" />
      </nav>

      <nav className={css.rightNav}>
        <ToggleBtn
          display={['⇩', '⇧']}
          toggle={toggleIsUp}
          selectedIndex={Number(isUp)}
        />
        <ToggleBtn
          display={['🌘', '☀️']}
          toggle={toggleTheme}
          selectedIndex={Number(theme)}
        />
        <GoBackBtn />
      </nav>
    </header>
  );
};
