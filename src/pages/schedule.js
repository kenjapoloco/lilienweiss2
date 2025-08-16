import React from 'react';
import Image from "next/image";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Head from 'next/head';

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"],});
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"],});

export default function Schedule() {
  const settings = {dots: true,};
  return (
    <div className={`${geistSans.className} ${geistMono.className} font-sans container grid items-center justify-items-center min-h-screen w-full`}>
    <Head>
        <title>リリエンワイス</title>
        <link rel="icon" href="/img/icon.png"/>
    </Head>
    <header className="text-gray-700 border-b border-green-100 bg-pink-100 fixed w-full">
     <div className="container flex mx-auto p-1 flex-col md:flex-row items-center" >
       <img  className="" src="/img/header4.png" width={180} height={180}/>
       <div className="md:ml-auto text-sm lg:mr-3 ">
         <Link href="/" className="mr-4 hover:text-blue-400 duration-300">ホーム</Link>
         <Link href="/about" className="mr-4 hover:text-blue-400 duration-300">リリエンワイスについて</Link>
         <Link href="/music" className="mr-4 hover:text-blue-400 duration-300">過去の音源</Link>
         <Link href="/schedule" className="mr-4 hover:text-blue-400 duration-300">今後の予定</Link>
         <Link href="/contact" className="hover:text-blue-400 duration-300">連絡</Link>
       </div>
     </div>
    </header>
    <div className="flex-col items-center text-left w-full mt-18 pt-15">
       <div className='border-b border-black w-full'>
          <h1 className="text-red-700 text-2xl font-medium ml-8">今後の演奏会について</h1>
        </div>
        <div >
          <h1 className="text-gray-700 text-1xl font-500 ml-15 mr-15 mt-5 mb-5">
            日時：2025年11月20日(木)<br/>
            開場：13:30<br/>
            開演：14:00<br/>
            場所：電気文化会館ザ・コンサートホール→<a href="https://www.denkibunka-kaikan.jp/guide/concert/" target="_blank" rel="noopener noreferrer" className='font-medium text-red-400 hover:text-red-700 duration-300'>ホールについて<br/></a>
            <span className='ml-15'>(地下鉄伏見駅4番出口より 徒歩2分)</span>→<a href="https://www.denkibunka-kaikan.jp/access/" target="_blank" rel="noopener noreferrer" className='font-medium text-red-400 hover:text-red-700 duration-300'>アクセス詳細<br/></a>
            入場：無料<br/>
          </h1>
        </div>
      </div>
          <div className="flex container mx-auto py-20 px-30 flex-col md:flex-row items-center justify-center">
            <div className="md:w-3/5 flex-grow mb-16 lg:pr-24 md:pr-16 items-center">
              <img src="/img/index.jpg" alt="写真" width={1842} height={1080} />
            </div>
            <div className="md:w-1/2 lg:max-w-lg w-5/6">
              <h1 className='mb-3 ml-17'>&lt;演奏曲目について&gt;</h1>
              <img src="/img/paper.png" alt="パンフレット" width={1080} height={1542} />
            </div>
          </div>
      <footer>
        <div className='flex pt-7 pb-12 border-t border-green-200  w-full pl-[6vw] lg:pl-[10vw] text-[2vw] font-extrabold '>
            <Link className="flex " href="/"><Image className="mr-1" src="/img/icon.ico" alt="icon" width={10} height={10}/>ホーム</Link>
            <Link className="flex ml-5" href="/about"><Image className="mr-1" src="/img/icon.ico" alt="icon" width={10} height={10}/>リリエンワイスについて</Link>
            <Link className="flex ml-5" href="/music"><Image className="mr-1" src="/img/icon.ico" alt="icon"  width={10} height={10}/>過去の演奏会の音源</Link>
            <Link className="flex ml-5" href="/schedule"><Image className="mr-1" src="/img/icon.ico" alt="icon"  width={10} height={10}/>今後の演奏会</Link>
            <Link className="flex ml-5" href="/contact"><Image className="mr-1" src="/img/icon.ico" alt="icon"  width={10} height={10}/>連絡</Link>
        </div>
        <div className="border-t border-green-200 w-full text-[2vw] pt-0.5 text-center">
            <p className=''>Copyright &copy: 2007 </p>
            <img src="/img/hana.png"/>
        </div>
      </footer>
  </div>
  );
};
