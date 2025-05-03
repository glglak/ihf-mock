import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

/**
 * Button Component
 * Reusable button component that can render as a button or a link
 * 
 * @param {Object} props - Component props
 * @param {string} [props.variant='primary'] - Button style variant
 * @param {string} [props.size='md'] - Button size
 * @param {boolean} [props.outline=false] - Whether to show outline style
 * @param {boolean} [props.block=false] - Whether to display as block
 * @param {string} [props.to] - Link path (renders as Link if provided)
 * @param {string} [props.href] - URL (renders as anchor if provided)
 * @param {boolean} [props.disabled=false] - Whether the button is disabled
 * @param {Function} [props.onClick] - Click handler
 * @param {React.ReactNode} props.children - Button content
 * @param {string} [props.className] - Additional CSS classes
 */
const Button = ({
  variant = 'primary',
  size = 'md',
  outline = false,
  block = false,
  to,
  href,
  disabled = false,
  onClick,
  children,
  className = '',
  ...props
}) => {
  // Construct CSS classes
  const buttonClass = [
    'ihf-button',
    `ihf-button-${variant}`,
    `ihf-button-${size}`,
    outline ? 'ihf-button-outline' : '',
    block ? 'ihf-button-block' : '',
    disabled ? 'ihf-button-disabled' : '',
    className
  ].filter(Boolean).join(' ');
  
  // Render as Link if 'to' prop is provided
  if (to) {
    return (
      <Link
        to={to}
        className={buttonClass}
        {...props}
      >
        {children}
      </Link>
    );
  }
  
  // Render as anchor if 'href' prop is provided
  if (href) {
    return (
      <a
        href={href}
        className={buttonClass}
        {...props}
      >
        {children}
      </a>
    );
  }
  
  // Otherwise render as button
  return (
    <button
      className={buttonClass}
      disabled={disabled}
      onClick={onClick}
      type={props.type || 'button'}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;