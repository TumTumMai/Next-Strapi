import type { NextPage } from "next";
import { useRouter } from "next/router";

const Page: NextPage = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <div className="p-8 justify-center items-center h-screen flex bg-blue-400 ">
      บทความเดี่ยวที่ {pid}
    </div>
  );
};

export default Page;
