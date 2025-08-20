import React from 'react';
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Head from 'next/head';

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"],});
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"],});

export default function Schedule() {
  const settings = {dots: true,};
  return (
    <div className={`${geistSans.className} ${geistMono.className} font-sans`}>
      <Head>
        <title>リリエンワイス</title>
        <Link rel="icon" href="favicon.ico"/>
      </Head>
      <header className="text-pink-500 font-medium text-shadow-2xs border-b border-gray-300 bg-pink-100 fixed w-full top-0">
       <div className="container flex mx-auto flex-col p-1 md:flex-row items-center md:items-end justify-between" >
         <Image className="mb-1 md:mb-0 lg:ml-5" src="/img/header4.png" width={180} height={180} alt='sample image'/>
         <div className="md:ml-auto text-base">
           <Link href="/" className="mr-4 hover:text-pink-400 duration-300">ホーム</Link>
           <Link href="/about" className="mr-4 hover:text-pink-400 duration-300">リリエンワイスについて</Link>
           <Link href="/1" className="mr-4 hover:text-pink-400 duration-300">過去の演奏</Link>
           <Link href="/schedule" className="mr-4 hover:text-pink-400 duration-300">今後の予定</Link>
           <Link href="/contact" className="md:mr-5 hover:text-pink-400 duration-300">連絡</Link>
         </div>
       </div>
      </header>
      <div className="flex-col items-center text-left w-full mt-18 pt-15">
        <div className='border-b border-black w-full'>
          <h1 className="text-red-700 text-2xl font-bold ml-8">今後の演奏会について</h1>
        </div>
        <div >
          <h1 className="text-gray-700 text-1xl font-medium ml-15 mr-15 mt-5">
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
              <Image src="/img/index.jpg" alt="写真" width={1842} height={1080} />
        </div>
        <div className="md:w-1/2 lg:max-w-lg w-5/6">
              <h1 className='mb-3 ml-17'>&lt;演奏曲目について&gt;</h1>
              <Image src="/img/paper.png" alt="パンフレット" width={1080} height={1542} />
        </div>
      </div>
      <footer>
          <div className='flex justify-center pt-5 pb-15 border-t border-green-200  w-full  text-1xl font-bold text-center'>
              <Link className="flex " href="/"><Image className="mr-1" src="/img/icon.png" alt="icon" width={10} height={10}/>ホーム</Link>
              <Link className="flex ml-5" href="/about"><Image className="mr-1" src="/img/icon.png" alt="icon" width={10} height={10}/>楽団について</Link>
              <Link className="flex ml-5" href="/1"><Image className="mr-1" src="/img/icon.png" alt="icon"  width={10} height={10}/>過去の演奏</Link>
              <Link className="flex ml-5" href="/schedule"><Image className="mr-1" src="/img/icon.png" alt="icon"  width={10} height={10}/>今後の演奏会</Link>
              <Link className="flex ml-5" href="/contact"><Image className="mr-1" src="/img/icon.png" alt="icon"  width={10} height={10}/>連絡</Link>
          </div>
          <div className="w-full">
              <p className='flex justify-center  w-full text-1xl pt-0.5 text-center'>Copyright &copy: 2025 </p>
              <Image alt='sample image' className="w-full center" src="/img/hana.png" width={1980} height={10}/>
          </div>
      </footer>
  </div>
  );
};
