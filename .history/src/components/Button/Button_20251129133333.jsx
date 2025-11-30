import clsx from 'clsx';
import css from './Button.module.css';

const Button = ({
  children,
  className = '',
  variant = 'primary',
  ...props
}) => {
  const classes = clsx(
    css.button,
    variant === 'primary' && css.primary,
    variant === 'secondary' && css.secondary,
    variant === 'icon' && css.icon,
    className
  );

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
