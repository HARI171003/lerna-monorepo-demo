import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <nav style={{ 
        padding: '1rem 2rem', 
        backgroundColor: '#f5f5f5', 
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <Link href="/" style={{ fontWeight: 'bold' }}>
          Monorepo Demo
        </Link>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </div>
      </nav>
      {children}
      <footer style={{ 
        padding: '2rem', 
        textAlign: 'center',
        borderTop: '1px solid #eaeaea',
        marginTop: '2rem'
      }}>
        <p>Lerna Monorepo Demo with Next.js</p>
      </footer>
    </div>
  );
}

export default Layout;
