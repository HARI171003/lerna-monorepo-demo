import React from 'react';
import { formatDate } from '@monorepo/utils';

export interface CardProps {
  /**
   * Card title
   */
  title: string;
  /**
   * Card content
   */
  content: string;
  /**
   * Card date
   */
  date?: Date;
  /**
   * Children components
   */
  children?: React.ReactNode;
}

/**
 * Card component for displaying content
 */
export const Card: React.FC<CardProps> = ({ title, content, date, children }) => {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        margin: '8px 0',
      }}
    >
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      <p>{content}</p>
      {date && <div style={{ fontSize: '0.8rem', color: '#666' }}>Date: {formatDate(date)}</div>}
      {children && <div style={{ marginTop: '12px' }}>{children}</div>}
    </div>
  );
};
