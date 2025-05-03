import React from 'react';
import './Card.css';

/**
 * Card Component
 * Reusable card component for displaying content in a contained area
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} [props.header] - Card header content
 * @param {React.ReactNode} props.children - Card body content
 * @param {React.ReactNode} [props.footer] - Card footer content
 * @param {boolean} [props.shadow=false] - Whether to display shadow
 * @param {string} [props.className] - Additional CSS classes
 */
const Card = ({
  header,
  children,
  footer,
  shadow = false,
  className = '',
  ...props
}) => {
  // Construct CSS classes
  const cardClass = [
    'ihf-card',
    shadow ? 'ihf-card-shadow' : '',
    className
  ].filter(Boolean).join(' ');
  
  return (
    <div className={cardClass} {...props}>
      {header && <div className="ihf-card-header">{header}</div>}
      <div className="ihf-card-body">{children}</div>
      {footer && <div className="ihf-card-footer">{footer}</div>}
    </div>
  );
};

export default Card;