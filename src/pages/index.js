import React from 'react';
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Head from "next/head";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"],});
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"],});

export default function Home() {
  return (
    <div className={`${geistSans.className} ${geistMono.className} font-sans`}>
      <Head>
        <title>リリエンワイス</title>
        <Link rel="icon" href="favicon.ico"/>
      </Head>
      <header className="text-pink-500 font-medium text-shadow-2xs border-b border-gray-300 bg-pink-100 fixed w-full top-0">
       <div className="container flex mx-auto flex-col p-1 md:flex-row items-center md:items-end justify-between" >
         <Image alt='sample image' className="mb-1 md:mb-0 lg:ml-5" src="/img/header4.png" width={180} height={180}/>
         <div className="md:ml-auto text-base">
           <Link href="/" className="mr-4 hover:text-pink-400 duration-300">ホーム</Link>
           <Link href="/about" className="mr-4 hover:text-pink-400 duration-300">リリエンワイスについて</Link>
           <Link href="/1" className="mr-4 hover:text-pink-400 duration-300">過去の演奏</Link>
           <Link href="/schedule" className="mr-4 hover:text-pink-400 duration-300">今後の予定</Link>
           <Link href="/contact" className="md:mr-5 hover:text-pink-400 duration-300">連絡</Link>
         </div>
       </div>
      </header>
      <div className="container flex-col mt-16 w-full items-center">
        <Image className="flex flex-col items-center" src="/img/1.png" alt="picture" width={1920} height={540}/>
        <h1 className="text-1xl font-medium mt-5 ml-5">リリエンワイスのホームページへようこそ</h1>
        <div>
          <h2 className='text-2xl text-red-600 font-extrabold mt-5 ml-5 border-b border-gray-500'>🌸ごあいさつ</h2>
          <p className='p-5 items-center ml-10'>こちらは愛知県で活動するギターマンドリンアンサンブル『リリエンワイス』のホームページです。<br/>
          演奏会の告知やYoutubeによる過去の演奏会の音源などの情報を発信してます。良かったら見て行ってください。</p>
        </div>
        <div>
          <h2 className='text-2xl text-red-600 font-extrabold mt-5 ml-5 border-b border-gray-500'>🌸お知らせ</h2>
          <p className='p-5 items-center ml-10'>
            次回の定期演奏会は、令和7年11月20日(木)に愛知県名古屋市の電気文化会館 ザ・コンサートホールで行います。
          </p>
        </div>      
      </div>
      <section className='container justify-center flex-col mb-16 w-full'>
      <div className="flex flex-col mb-15 lg:pr-24 md:pr-16 items-center text-center">
        <button href="/schedule" className="text-white font-bold bg-green-500 mb-10 py-1 px-2 border-0 rounded text-lg hover:bg-green-400 duration-300">詳細はこちら</button>
        <Image className='w-2/3' src="/img/paper.png" alt="パンフレット" width={1080} height={1542} />
      </div> 
      </section>
        <footer>
          <div className='flex justify-center pt-5 pb-15 border-t border-green-200  w-full  text-1xl font-bold text-center'>
              <Link className="flex " href="/"><Image className="mr-1" src="/img/icon.png" alt="icon" width={10} height={10}/>ホーム</Link>
              <Link className="flex ml-5" href="/about"><Image className="mr-1" src="/img/icon.png" alt="icon" width={10} height={10}/>楽団について</Link>
              <Link className="flex ml-5" href="/1"><Image className="mr-1" src="/img/icon.png" alt="icon"  width={10} height={10}/>過去の演奏</Link>
              <Link className="flex ml-5" href="/schedule"><Image className="mr-1" src="/img/icon.png" alt="icon"  width={10} height={10}/>今後の予定</Link>
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
