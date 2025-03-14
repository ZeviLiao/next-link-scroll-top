'use client';

import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  const handlePushWithScroll = () => {
    router.push('/test'); // 預設行為，會自動滾動到頂部
  };

  const handlePushWithoutScroll = () => {
    router.push('/test', { scroll: false }); // 不會滾動到頂部
  };

  const handleReplaceWithScroll = () => {
    router.replace('/test'); // 預設行為，會自動滾動到頂部
  };

  const handleReplaceWithoutScroll = () => {
    router.replace('/test', { scroll: false }); // 不會滾動到頂部
  };

  return (
    <div style={{ height: '200vh', padding: '20px' }}>
      <h1>Page 1</h1>
      <p>往下捲動，點擊按鈕來測試滾動行為</p>

      <div style={{ marginBottom: '20px' }}>
        <button onClick={handlePushWithScroll}>
          Push to Page 2 with scroll (滾動到頂部)
        </button>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <button onClick={handlePushWithoutScroll}>
          Push to Page 2 without scroll (保持滾動位置)
        </button>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <button onClick={handleReplaceWithScroll}>
          Replace to Page 2 with scroll (滾動到頂部)
        </button>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <button onClick={handleReplaceWithoutScroll}>
          Replace to Page 2 without scroll (保持滾動位置)
        </button>
      </div>
    </div>
  );
};

export default Page;
