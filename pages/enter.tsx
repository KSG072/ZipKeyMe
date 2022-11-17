// 유저 로그인 페이지

import type {NextPage} from 'next'
import Layout from "../components/layout";
import Head from "next/head";

const Enter: NextPage = () => {
	return (
		<Layout title={"로그인"} hasTabBar>
			<Head><title>Login</title></Head>
			<div className={"flex flex-col space-y-5 divide-y"}>
				유저 로그인
			</div>
		</Layout>
	);
}

export default Enter;