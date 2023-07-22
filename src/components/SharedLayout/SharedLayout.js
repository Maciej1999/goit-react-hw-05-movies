import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { GoBackBtn } from 'components/GoBackBtn/GoBackBtn';
import { useTheme } from 'components/ThemeProvider/ThemeProvider';
import css from './SharedLayout.module.css';
export const SharedLayout = () => {
  const { theme } = useTheme();
  return (
    <div className={`${css.page} ${theme ? '' : css.themeDark}`}>
      <Header />
      <main className={css.pageContent} id="home">
        <GoBackBtn />
        <Outlet />
      </main>
      <footer className="footer" id="footer" />
    </div>
  );
};
export default SharedLayout;
