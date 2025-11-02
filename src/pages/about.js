import React from 'react';
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Head from 'next/head';

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"],});
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"],});

export default function About() {
  return (
    <div className={`${geistSans.className} ${geistMono.className} font-sans`}>
      <Head>
        <title>リリエンワイス</title>
        <Link rel="icon" href="favicon.ico"/>
      </Head>
      <header className="text-pink-500 font-medium text-shadow-2xs border-b border-gray-300 bg-pink-100 fixed w-full top-0">
       <div className="container flex mx-auto flex-col p-1 md:flex-row items-center md:items-end justify-between" >
       <Link href="/"><Image alt='sample image' className="mb-1 md:mb-0 lg:ml-5" src="/img/header4.png" width={180} height={180}/></Link>
         <div className="md:ml-auto text-base">
           <Link href="/" className="mr-4 hover:text-pink-400 duration-300">ホーム</Link>
           <Link href="/about" className="mr-4 hover:text-pink-400 duration-300">リリエンワイスについて</Link>
           <Link href="/1" className="mr-4 hover:text-pink-400 duration-300">過去の演奏</Link>
           <Link href="/schedule" className="mr-4 hover:text-pink-400 duration-300">今後の予定</Link>
           <Link href="/contact" className="md:mr-5 hover:text-pink-400 duration-300">連絡</Link>
         </div>
       </div>
      </header>
      <div className="container flex-col items-center text-left w-full mt-18 pt-15">
         <div className='border-b border-black w-full'>
            <h1 className="text-red-700 text-1xl font-bold ml-8">マンドリンアンサンブル<span className='text-red-700 text-2xl '>リリエンワイスについて</span></h1>
          </div>
          <div >
            <h1 className="text-gray-700 text-1xl font-500 ml-15 mr-15 mt-5 mb-5">
             愛知県中心に活動するマンドリンアンサンブル『リリエンワイス』は、
             金城学院大学と金城学院短期大学のギターマンドリンクラブの卒部生有志により1998年に誕生。
             学生時代に出会った音楽への思いという灯火を持ち寄り、これまで訪問演奏や母校での演奏をしてまいりました。
             演奏会を定期的に開いておりますので、少しでも私たちの音楽で喜びを感じていただければ身に余る光栄です。
            </h1>
          </div>
      </div>
      <div className="w-full mb-10">
           <Image className="container flex mx-auto flex-col items-center max-w-1/2" src="/img/2.png" alt="logo" width={1980} height={540}/>
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
