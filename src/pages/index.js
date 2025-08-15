import React from 'react';
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Head from "next/head";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"],});
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"],});

export default function Home() {
  const settings = {dots: true,};
  return (
    <div className={`${geistSans.className} ${geistMono.className} 
    font-sans container grid items-center justify-items-center min-h-screen`}>
      <Head>
        <title>リリエンワイス</title>
      </Head>
      <header>
       <div className=" text-gray-700 border-gray-200 w-full" >
         <img  className="relative z-1" src="/img/header.png"/>
            <ul className="absolute flex text-right top-full -right-full z-2">
              <li href="/" className="mr-2 hover:text-blue-400 duration-300">ホーム</li>
              <li href="/about" className="mr-2 hover:text-blue-400 duration-300">リリエンワイスについて</li>
              <li href="/music" className="mr-2 hover:text-blue-400 duration-300">過去の音源</li>
              <li href="/schedule" className="mr-2 hover:text-blue-400 duration-300">今後の予定</li>
              <li href="/contact" className="hover:text-blue-400 duration-300">連絡</li>
            </ul>
       </div>
      </header>
      <div className="flex-col items-center text-center w-full">
          <div>
            <Image className="dark:invert" src="/img/2.png" alt="logo" width={1920} height={800} priority/>
            <h1 className="text-6xl z-2">Index Page</h1>
          </div>
          <div>
            <ol className="font-mono list-inside list-decimal text-sm/6 text-center">
              <li className="mb-2 tracking-[-.01em]">Get started by editing{" "}<code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">src/pages/index.js</code>.</li>
              <li className="tracking-[-.01em]">Save and see your changes instantly.</li>
            </ol>
          </div>
        </div>
        <section className="text-gray-700" id="home">
          <div className="flex container mx-auto py-20 px-30 flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 items-center text-center md:text-left">
              <p className="text-2xl font-bold text text-red-400">
                次回の定期演奏会
              </p>
              <h1 className="text-3xl font-extrabold text-red-700">
              <span className="text-2xl font-extrabold text-black">令和7年11月20日(木)</span><br />名古屋市<br />電気文化会館<br />ザ・コンサートホール 
              </h1>
              <button href="#" className="text-white font-bold bg-green-500 mt-3 py-2 px-3 border-0 rounded text-lg hover:bg-green-400 duration-300">詳細はこちら</button>
            </div>
            <div className="md:w-1/2 lg:max-w-lg w-5/6">
              <img src="/img/paper.png" alt="パンフレット" width={1080} height={1542} />
            </div>
            </div>
        </section>
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
