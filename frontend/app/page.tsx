'use client';

import Background from '@/components/Background';
import ChatInterface from '@/components/ChatInterface';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Background />
      <div className="relative z-10">
        <ChatInterface />
      </div>
    </main>
  );
}
