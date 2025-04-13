import React, { useState } from 'react';
import Head from 'next/head';
import { Button, Card } from '@monorepo/ui';
import { formatCurrency } from '@monorepo/utils';
import styles from '@/styles/Home.module.css';
import Layout from '@/components/Layout';

export default function Home() {
  const [count, setCount] = useState(0);
  
  return (
    <Layout>
      <Head>
        <title>Lerna Monorepo Demo</title>
        <meta name="description" content="Next.js app in a Lerna monorepo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>Lerna Monorepo Demo with Next.js</h1>
          
          <Card 
            title="Welcome to our Next.js demo app" 
            content="This app demonstrates a Lerna monorepo setup with Next.js, Husky, Git Workflows, and Testing." 
            date={new Date()}
          >
            <div>
              <p>Current count: {count}</p>
              <p>Value: {formatCurrency(count * 10.5)}</p>
              
              <div style={{ display: 'flex', gap: '10px' }}>
                <Button 
                  label="Increment" 
                  onClick={() => setCount(prev => prev + 1)} 
                  variant="primary"
                />
                <Button 
                  label="Decrement" 
                  onClick={() => setCount(prev => Math.max(0, prev - 1))} 
                  variant="secondary"
                  disabled={count === 0}
                />
                <Button 
                  label="Reset" 
                  onClick={() => setCount(0)} 
                  variant="danger"
                  disabled={count === 0}
                />
              </div>
            </div>
          </Card>
        </div>
      </main>
    </Layout>
  );
}
