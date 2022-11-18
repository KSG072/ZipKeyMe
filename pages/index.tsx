import type {NextPage} from 'next'
import Layout from "../components/layout";
import Head from "next/head";
import Carousel from "../components/Carousel";
import MainButton from "../components/MainButton";

import Image from "next/image";
import FareCheck from "public/fare_check.svg";
import FarePay from "public/fare_pay.svg";
import CarRegister from "public/car_register.svg";
import Vote from "public/vote.svg";
import Complaint from "public/complaint.svg";
import Notice from "public/notice.svg";

const Home: NextPage = () => {
  return (
    <Layout hasTabBar>
      <Head><title>Home | ZipKeyMe</title></Head>

      {/* 배너 섹션 */}
      <section className={"border-y-2 mt-14"}>
        <Carousel
          slides={[
            <Image key={0} fill src={`/banner.png`} className="object-contain" alt="Image" />,
            <Image key={1} fill src={`/banner.png`} className="object-contain" alt="Image" />,
            <Image key={2} fill src={`/banner.png`} className="object-contain" alt="Image" />,
            <Image key={3} fill src={`/banner.png`} className="object-contain" alt="Image" />
          ]}
          options={{
            align: "start",
            loop: true,
            skipSnaps: false,
            inViewThreshold: 0.7,
          }}
        />
      </section>

      {/* 메뉴 섹션 */}
      <section className={"bg-white mt-12 grid grid-cols-3 grid-rows-2 rounded-3xl py-6 drop-shadow-2xl mx-6 gap-y-6"}>
        <div className={"flex justify-center items-center"}>
          <MainButton text={"요금 조회"}><FareCheck /></MainButton>
        </div>
        <div className={"flex justify-center items-center"}>
          <MainButton text={"요금 납부"}><FarePay /></MainButton>
        </div>
        <div className={"flex justify-center items-center"}>
          <MainButton text={"차량 등록"}><CarRegister /></MainButton>
        </div>
        <div className={"flex justify-center items-center"}>
          <MainButton text={"투표"}><Vote /></MainButton>
        </div>
        <div className={"flex justify-center items-center"}>
          <MainButton text={"민원"}><Complaint /></MainButton>
        </div>
        <div className={"flex justify-center items-center"}>
          <MainButton text={"공지사항"}><Notice /></MainButton>
        </div>
      </section>
    </Layout>
  );
}

export default Home