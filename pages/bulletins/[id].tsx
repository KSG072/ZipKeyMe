import type { NextPage } from "next";
import Layout from "@components/Layout";
import Head from "next/head";
import Textarea from "@components/Textarea";
import { useRouter } from "next/router";
import useSWR from "swr";
type Reple = {
  repleId: string;
  repleAt: Date;
  content: string;
  users: {
    name: string;
  };
};

type Post = {
  postId: number;
  title: string;
  id: string | null;
  content: string;
  postAt: Date;
  isNotice: boolean;
  users: {
    name: string;
  } | null;
  reples: Reple[] | null;
  _count: {
    reples: number;
    likes: number;
  };
};

interface PostDetailResponse {
  ok: Boolean;
  post: Post;
}

const BulletinDetail: NextPage = () => {
  const router = useRouter();
  const { data } = useSWR<PostDetailResponse>(
    router.query.id ? `/api/bulletins/posts/${router.query.id}` : null
  );
  console.log(data);
  return (
    <Layout
      title={"게시글"}
      hasTabBar
      canGoBack
    >
      <Head>
        <title>{data?.post?.title}</title>
      </Head>

      {/* 유저 프로필 */}
      <section>
        <div className={"flex mt-5 mb-3 px-4 pb-2 items-center space-x-3"}>
          <div
            className={
              "flex justify-center items-center w-10 h-10 rounded-lg border-2"
            }
          >
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 21.5C4.09532 18.5854 7.61891 16.7941 11.5 16.7941C15.3811 16.7941 18.9047 18.5854 21.5 21.5M16.5 6.79412C16.5 9.71798 14.2614 12.0882 11.5 12.0882C8.73858 12.0882 6.5 9.71798 6.5 6.79412C6.5 3.87026 8.73858 1.5 11.5 1.5C14.2614 1.5 16.5 3.87026 16.5 6.79412Z"
                stroke="#444444"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <p className={"text-sm font-bold text-gray-700"}>
              {data?.post?.users?.name}
            </p>
            <p className={"text-xs text-gray-500"}>
              {("" + data?.post?.postAt).substring(0, 10)}
            </p>
          </div>
        </div>
      </section>

      {/* 게시글 내용 */}
      <section className={"border-b-2 pb-20 px-4"}>
        <p className={"my-2 text-2xl font-bold"}>{data?.post?.title}</p>
        <p className={"text-gray-800 leading-relaxed"}>{data?.post?.content}</p>
      </section>

      {/* 댓글 */}
      <section className={"px-4 border-bw-full divide-y"}>
        {data?.post?.reples?.map((reple) => (
          <div
            key={reple.repleId}
            className={"py-3"}
          >
            <div className={"flex items-center space-x-3"}>
              <div
                className={
                  "flex justify-center items-center w-10 h-10 rounded-lg border-2"
                }
              >
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 21.5C4.09532 18.5854 7.61891 16.7941 11.5 16.7941C15.3811 16.7941 18.9047 18.5854 21.5 21.5M16.5 6.79412C16.5 9.71798 14.2614 12.0882 11.5 12.0882C8.73858 12.0882 6.5 9.71798 6.5 6.79412C6.5 3.87026 8.73858 1.5 11.5 1.5C14.2614 1.5 16.5 3.87026 16.5 6.79412Z"
                    stroke="#444444"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className={"text-sm font-bold text-gray-700"}>
                  {reple.users.name}
                </p>
                <p className={"text-xs text-gray-500"}>
                  {("" + reple.repleAt).substring(0, 10)}
                </p>
              </div>
            </div>
            <p className={"text-gray-800 leading-relaxed mt-2"}>
              {reple.content}
            </p>
          </div>
        ))}
      </section>

      {/* 댓글 작성 */}
      <section className={"px-4"}>
        <div className={""}>
          <Textarea
            name={"description"}
            placeholder={"댓글을 입력하세요."}
            required
          />
          <button
            className={
              "mt-2 w-full bg-pantone text-white py-2 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-pantone focus:outline-none"
            }
          >
            작성
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default BulletinDetail;
