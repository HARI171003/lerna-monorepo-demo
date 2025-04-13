import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Card } from '@monorepo/ui';
import styles from '@/styles/Home.module.css';
import Layout from '@/components/Layout';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About - Lerna Monorepo Demo</title>
        <meta name="description" content="About page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>About</h1>
          
          <Card 
            title="About this project" 
            content="This is a demo project showcasing a Lerna monorepo setup with Next.js, TypeScript, Husky, and automated testing."
          >
            <div>
              <p>The monorepo contains three packages:</p>
              <ul>
                <li><strong>@monorepo/app</strong>: Next.js application (this app)</li>
                <li><strong>@monorepo/ui</strong>: Shared UI component library</li>
                <li><strong>@monorepo/utils</strong>: Common utility functions</li>
              </ul>
              <div style={{ marginTop: '20px' }}>
                <Link href="/" style={{ color: '#0070f3', textDecoration: 'none' }}>
                  &larr; Back to Home
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </Layout>
  );
}
