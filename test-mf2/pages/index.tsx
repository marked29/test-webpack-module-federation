import Image from 'next/image';
import AlertButton from '@/components/alert-button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>This is the test project</p>
      <AlertButton />
    </main>
  );
}
