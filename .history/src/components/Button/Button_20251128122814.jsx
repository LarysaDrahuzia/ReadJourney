import clsx from 'clsx';
import css from './Button.module.css';

export default function Button({
  children,
  className = '',
  variant = 'primary',
  ...props
}) {
  const classes = clsx(
    css.button,
    variant === 'icon' && css.icon, // ← модифікатор
    className
  );
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
