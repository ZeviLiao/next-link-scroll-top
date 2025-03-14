'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Page = () => {
  const router = useRouter();

  const handlePushWithScroll = () => {
    router.push('/test');
  };

  const handlePushWithoutScroll = () => {
    router.push('/test', { scroll: false });
  };

  const handleReplaceWithScroll = () => {
    router.replace('/test');
  };

  const handleReplaceWithoutScroll = () => {
    router.replace('/test', { scroll: false });
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // window.scrollTo(0, 0);
    router.push('/test', { scroll: true });
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

      <div>
        <Link href="/test" scroll={true}
        >Go to Page 2 (Link)</Link>
      </div>
      {/* <Link
        onClick={handleClick} href={'#'}>
        Go to Page 2 (Link)
      </Link> */}
    </div>
  );
};

export default Page;
