"use client";

import dynamic from "next/dynamic";

const PageContent = dynamic(() => import("@/components/chat/pageContent"), {
  ssr: false,
});

const Page = () => {
  return <PageContent />;
};

export default Page;
