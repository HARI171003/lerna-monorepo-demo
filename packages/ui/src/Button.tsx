import React from 'react';

export interface ButtonProps {
  /**
   * Button label
   */
  label: string;
  /**
   * Click handler
   */
  onClick?: () => void;
  /**
   * Button variant
   */
  variant?: 'primary' | 'secondary' | 'danger';
  /**
   * Is button disabled
   */
  disabled?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  label = 'Button',
  onClick,
  variant = 'primary',
  disabled = false,
}) => {
  const getButtonStyle = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      padding: '10px 20px',
      fontSize: '16px',
      border: 'none',
      borderRadius: '4px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.7 : 1,
    };
    
    switch (variant) {
      case 'primary':
        return { ...baseStyle, backgroundColor: '#007bff', color: 'white' };
      case 'secondary':
        return { ...baseStyle, backgroundColor: '#6c757d', color: 'white' };
      case 'danger':
        return { ...baseStyle, backgroundColor: '#dc3545', color: 'white' };
      default:
        return baseStyle;
    }
  };

  return (
    <button
      style={getButtonStyle()}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
