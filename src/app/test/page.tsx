'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

const TestPage = () => {
  const router = useRouter();

  const handlePushWithScroll = () => {
    router.push('/');
  };

  const handlePushWithoutScroll = () => {
    router.push('/', { scroll: false });
  };

  const handleReplaceWithScroll = () => {
    router.replace('/');
  };

  const handleReplaceWithoutScroll = () => {
    router.replace('/', { scroll: false });
  };

  return (
    <div style={{ height: '200vh', padding: '20px' }}>
      <h1>Page 2</h1>
      <p>往下捲動，點擊按鈕來測試滾動行為</p>

      <div style={{ marginBottom: '20px' }}>
        <button onClick={handlePushWithScroll}>
          Push to Page 1 with scroll (滾動到頂部)
        </button>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <button onClick={handlePushWithoutScroll}>
          Push to Page 1 without scroll (保持滾動位置)
        </button>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <button onClick={handleReplaceWithScroll}>
          Replace to Page 1 with scroll (滾動到頂部)
        </button>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <button onClick={handleReplaceWithoutScroll}>
          Replace to Page 1 without scroll (保持滾動位置)
        </button>
      </div>

      {/* 使用 Link 進行導航 */}
      <div>
        <Link href="/" scroll={false}
        >Go to Page 1 (Link)</Link>
      </div>
    </div>
  );
};

export default TestPage;
