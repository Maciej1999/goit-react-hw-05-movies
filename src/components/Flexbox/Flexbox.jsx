import css from './Flexbox.module.css';
export const Flexbox = props => {
  return <div className={css.flexbox}>{props.children}</div>;
};
