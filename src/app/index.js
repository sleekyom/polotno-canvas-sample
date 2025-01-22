'use client'

import dynamic from 'next/dynamic';
const Editor = dynamic(() => import('../components/editor.js'), {
  ssr: false,
});

export default function IndexPage() {
  return (
    <div>
      <Editor />
      {/* <CustomSidePanel /> */}
      <style jsx global>{`
        body {
          padding: 0;
          margin: 0;
        }
      `}</style>
    </div>
  );
}