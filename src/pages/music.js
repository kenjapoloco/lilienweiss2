import React from 'react';
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Head from "next/head";
import { Table } from 'react-bootstrap';

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"],});
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"],});

export default function Music() {
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
           <Link href="/music" className="mr-4 hover:text-pink-400 duration-300">過去の演奏</Link>
           <Link href="/schedule" className="mr-4 hover:text-pink-400 duration-300">今後の予定</Link>
           <Link href="/contact" className="md:mr-5 hover:text-pink-400 duration-300">連絡</Link>
         </div>
       </div>
      </header>
      <div class="wrapper" className='w-full flex justify-space-between'>
        <div className='text-1xl text-end md:text-center text-white bg-green-200 font-bold min-w-55 md:min-w-fit'>
          <aside class="sidebar" className='sticky top-30 col-span-1 mt-40 ml-5 mr-5'>
              <p className='text-black font-extrabold'>＜過去の演奏会の曲目＞</p>
              <Link href="/1" className=" hover:text-green-400 duration-300 [text-shadow:_1px_1px_4px_var(--tw-shadow-color)] shadow-black">⚫︎第1回定期演奏会 2003.12.21</Link><br/>
              <Link href="/2" className=" hover:text-green-400 duration-300 [text-shadow:_1px_1px_4px_var(--tw-shadow-color)] shadow-black">⚫︎第2回定期演奏会 2005.12.18</Link><br/>
              <Link href="/3" className=" hover:text-green-400 duration-300 [text-shadow:_1px_1px_4px_var(--tw-shadow-color)] shadow-black">⚫︎第3回定期演奏会 2007.11.23</Link><br/>
              <Link href="/4" className=" hover:text-green-400 duration-300 [text-shadow:_1px_1px_4px_var(--tw-shadow-color)] shadow-black">⚫︎第4回定期演奏会 2009.11.23</Link><br/>
              <Link href="/5" className=" hover:text-green-400 duration-300 [text-shadow:_1px_1px_4px_var(--tw-shadow-color)] shadow-black">⚫︎第5回定期演奏会 2011.12.22</Link><br/>
              <Link href="/6" className=" hover:text-green-400 duration-300 [text-shadow:_1px_1px_4px_var(--tw-shadow-color)] shadow-black">⚫︎第6回定期演奏会 2014.12.7</Link><br/>
              <Link href="/7" className=" hover:text-green-400 duration-300 [text-shadow:_1px_1px_4px_var(--tw-shadow-color)] shadow-black">⚫︎第7回定期演奏会 2016.11.3</Link><br/>
              <Link href="/8" className=" hover:text-green-400 duration-300 [text-shadow:_1px_1px_4px_var(--tw-shadow-color)] shadow-black">⚫︎第8回定期演奏会 2017.11.30</Link><br/>
              <Link href="/9" className=" hover:text-green-400 duration-300 [text-shadow:_1px_1px_4px_var(--tw-shadow-color)] shadow-black">⚫︎第9回定期演奏会 2019.11.21</Link><br/>
              <Link href="/10" className=" hover:text-green-400 duration-300 [text-shadow:_1px_1px_4px_var(--tw-shadow-color)] shadow-black">⚫︎第10回定期演奏会 2023.11.5</Link><br/>
              <Link href="/11" className=" hover:text-green-400 duration-300 [text-shadow:_1px_1px_4px_var(--tw-shadow-color)] shadow-black">⚫︎第11回定期演奏会 2024.12.12</Link><br/>
          </aside>
        </div>
        <main class="main" className='container items-center text-center flex flex-col mr-5 ml-5 mt-40'>
          <h1 className="text-3xl font-bold md:text-5xl flex flex-col mb-3">第1回定期演奏会</h1>
          <Table border="1" cellpadding="2" className='flex flex-col border border-slate-500'>
              <tbody>
                <tr>
                  <td class="index_center border border-slate-600 font-bold" width="65" valign="top">日時</td>
                  <td class="data border border-slate-600 text-center" width="300">2025年2月16日(日)<br/></td>
                  <td class="index_center border border-slate-600 font-bold" width="65" valign="top">会場</td>
                  <td class="data border border-slate-600" width="420">名古屋市電気文化会館ザ・コンサートホール</td>
                </tr>
                <tr>
                  <td class="index_center border border-slate-600 font-bold" width="35" valign="top">曲目</td>
                  <td class="data border border-slate-600" colspan="3">
                  ＜第１部＞ <br/>
                  プロヴァンス風序曲 (A.トゥルネル)<br/>
                  詩的間奏曲 (A.カッペッレッティ)<br/>
                  珍獣たちの園 (水野真人)<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(ディベルティメント第2番 「おとぎの国の少年」より)<br/>
                  夜明けの賛歌 (藤掛廣幸)<br/><br/>

                  ＜第２部＞ <br/>
                  ワルツ「水彩画」(ヨーゼフ・シュトラウス)<br/>
                  交響的牧歌「夕暮れに」より詩曲(Z.フィビフ)<br/>
                  カンタータ「歌」より間奏曲(W.ステンハンマル)<br/>
                  歌劇「メデア」序曲（L.ケルビーニ）<br/><br/>
                  ＜アンコール＞<br/>
                  交響曲第29番K.201より第1楽章(W.A.モーツァルト)<br/><br/><br/>
                  </td>
                </tr>
              </tbody>
            </Table>
            <div className='mb-10 text-pink-600 flex flex-col'>
              <a href="#top" className="flex hover:text-pink-400 duration-300">Page Top</a>
            </div>
          </main>
      </div>
      <footer>
          <div className='flex justify-center pt-5 pb-15 border-t border-green-200  w-full  text-1xl font-bold text-center'>
              <Link className="flex " href="/"><Image className="mr-1" src="/img/icon.png" alt="icon" width={10} height={10}/>ホーム</Link>
              <Link className="flex ml-5" href="/about"><Image className="mr-1" src="/img/icon.png" alt="icon" width={10} height={10}/>楽団について</Link>
              <Link className="flex ml-5" href="/music"><Image className="mr-1" src="/img/icon.png" alt="icon"  width={10} height={10}/>過去の演奏</Link>
              <Link className="flex ml-5" href="/schedule"><Image className="mr-1" src="/img/icon.png" alt="icon"  width={10} height={10}/>今後の演奏会</Link>
              <Link className="flex ml-5" href="/contact"><Image className="mr-1" src="/img/icon.png" alt="icon"  width={10} height={10}/>連絡</Link>
          </div>
          <div className="w-full">
              <p className='flex justify-center  w-full text-1xl pt-0.5 text-center'>Copyright &copy: 2025 </p>
              <Image className="w-full center" alt='sample image' src="/img/hana.png" width={1980} height={10}/>
          </div>
      </footer>
    </div>
  );
};
