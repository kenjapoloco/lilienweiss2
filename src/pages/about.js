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

export default function About() {
  const settings = {dots: true,};
  return (
    <div className={`${geistSans.className} ${geistMono.className} font-sans container grid items-center justify-items-center min-h-screen w-full`}>
      <Head>
        <title>リリエンワイス</title>
        <link rel="icon" href="favicon.ico"/>
      </Head>
      <header className="text-gray-700 border-b border-green-100 bg-pink-100 fixed w-full">
       <div className="container flex mx-auto p-1 flex-col md:flex-row items-center md:items-end" >
         <img  className="" src="/img/header4.png" width={180} height={180}/>
         <div className="md:ml-auto mr-10  lg:mr-3 items-end">
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
        <div className="">
           <Image className="" src="/img/2.png" alt="logo" width={1920} height={540}/>
        </div>

        <footer>
          <div className='flex justify-center pt-3 pb-15 border-t border-green-200  w-full pl-[6vw] lg:pl-[10vw] text-1xl font-bold text-center'>
              <Link className="flex " href="/"><Image className="mr-1" src="/img/icon.png" alt="icon" width={10} height={10}/>ホーム</Link>
              <Link className="flex ml-5" href="/about"><Image className="mr-1" src="/img/icon.png" alt="icon" width={10} height={10}/>楽団について</Link>
              <Link className="flex ml-5" href="/music"><Image className="mr-1" src="/img/icon.png" alt="icon"  width={10} height={10}/>過去の音源</Link>
              <Link className="flex ml-5" href="/schedule"><Image className="mr-1" src="/img/icon.png" alt="icon"  width={10} height={10}/>今後の演奏会</Link>
              <Link className="flex ml-5" href="/contact"><Image className="mr-1" src="/img/icon.png" alt="icon"  width={10} height={10}/>連絡</Link>
          </div>
          <div className="border-t border-green-200 w-full text-1xl pt-0.5 text-center">
              <p className=''>Copyright &copy: 2007 </p>
              <img src="/img/hana.png"/>
          </div>
      </footer>
    </div>
  );
};
