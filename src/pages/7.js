import React from 'react';
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Head from "next/head";
import { Table } from 'react-bootstrap';
import { YouTubeEmbed } from '@next/third-parties/google'

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"],});
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"],});

export default function Music() {
  return (
    <div className={`${geistSans.className} ${geistMono.className} font-sans`}>
      <Head>
        <title>リリエンワイス</title>
        <link rel="icon" href="favicon.ico"/>
      </Head>
      <header className="text-pink-500 font-medium text-shadow-2xs border-b border-gray-300 bg-pink-100 fixed w-full top-0">
       <div className="container flex mx-auto flex-col p-1 md:flex-row items-center md:items-end justify-between" >
         <Image  className="mb-1 md:mb-0 lg:ml-5" src="/img/header4.png" width={180} height={180} alt=''/>
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
        <div className='mb-5 text-pink-600 flex flex-row'>
            <a href="/6" className="flex mb-2 hover:text-pink-400 duration-300">＜前年へ</a>
              <a href="/8" className="flex ml-30 md:ml-75 lg:ml-130 hover:text-pink-400 duration-300">次年へ＞</a>
            </div>
          <h1 className="text-3xl font-bold md:text-5xl flex flex-col mb-3">第7回定期演奏会</h1>
          <Table border="1" cellpadding="2" className='flex flex-col border border-slate-500'>
              <tbody>
                <tr>
                  <td class="index_center border border-slate-600 font-bold" width="65" valign="top">日時</td>
                  <td class="data border border-slate-600 text-center" width="330">2005年12月18日(日)<br/></td>
                  <td class="index_center border border-slate-600 font-bold" width="65" valign="top">会場</td>
                  <td class="data border border-slate-600" width="420">名古屋市電気文化会館ザ・コンサートホール</td>
                </tr>
                <tr>
                  <td class="index_center border border-slate-600 font-bold" width="35" valign="top">曲目</td>
                  <td class="data border border-slate-600 text-start p-5 items-center" colspan="3">
                  ＜第１部＞ <br/>
                    ①ひとりぼっちの晩餐会 ~映画“美女と野獣”より <br/>
                    Alan Menken/武藤理恵編曲<br/>
                    <YouTubeEmbed videoid="NQf7Wp5l-9A" width={280} params="controls=0" className="" /><br/>

                    ②PLUCKING STRINGS / Julius Steffaro<br/>
                    <YouTubeEmbed videoid="qp84DqYOpRo" width={280} params="controls=0" className="items-center" /><br/>

                    ④学生王子のセレナード/Sigmund Romberg<br/>
                    <YouTubeEmbed videoid="wCSdKXDftaQ" width={280} params="controls=0" className="items-center" /><br/>

                    ⑤序曲“レナータ”/ Hyacinthe Lavitrano<br/>
                    <YouTubeEmbed videoid="LVBGuSQuhxY" width={280} params="controls=0" className="items-center" /><br/>

                    ⑥アヴェマリア/ Franz Schubert/中野二郎編曲<br/>
                    <YouTubeEmbed videoid="6OVcfXPm0F4" width={280} params="controls=0" className="items-center" /><br/>

                    讃美歌シリーズ<br/>
                    ⑦“神の御子は”<br/>
                    <YouTubeEmbed videoid="1sEnhNxLZ2I" width={280} params="controls=0" className="items-center" /><br/>

                    ⑧“天にはさかえ”<br/>
                    <YouTubeEmbed videoid="U2oylu0Rj30" width={280} params="controls=0" className="items-center" /><br/>

                    ⑨“きよしこの夜”<br/>
                    <YouTubeEmbed videoid="btKmgHQXZLw" width={280} params="controls=0" className="items-center" /><br/>

                    ⑩“牧人ひつじを”<br/>
                    <YouTubeEmbed videoid="EjS05Wo3o5Q" width={280} params="controls=0" className="items-center" /><br/>

                    11. ”もろびとこぞりて” 帰山栄治編曲<br/>
                    <YouTubeEmbed videoid="kGLtLSRtKGs" width={280} params="controls=0" className="items-center" /><br/>

                    12. ”HOLY NIGHT" 帰山栄治編曲<br/>
                    <YouTubeEmbed videoid="kjmad-JvAfo" width={280} params="controls=0" className="items-center" /><br/>

                    ＜第２部＞ <br/>

                    13. マヅルカーバレエ組曲“コッペリア”より Léo Deliebs/川瀬憲司編曲<br/>
                    <YouTubeEmbed videoid="WkspQSK6Qfc" width={280} params="controls=0" className="items-center" /><br/>

                    リュートの為の古い舞曲とアリア第3組曲 / Ottorino Respighi/帰山栄治編曲<br/>
                    14. イタリアーナ<br/>
                    <YouTubeEmbed videoid="zZ5lH42WaDY" width={280} params="controls=0" className="items-center" /><br/>

                    15. 宮廷のアリア<br/>
                    <YouTubeEmbed videoid="sWvdTbnXjNk" width={280} params="controls=0" className="items-center" /><br/>

                    16. シシリアーナ<br/>
                    <YouTubeEmbed videoid="6OVcfXPm0F4" width={280} params="controls=0" className="items-center" /><br/>

                    17. パッサカリア<br/>
                    <YouTubeEmbed videoid="7mbcBw65mho" width={280} params="controls=0" className="items-center" /><br/>
                  </td>
                </tr>
              </tbody>
            </Table>
            <div className='mb-10 text-pink-600 flex md:flex-row flex-col mt-5'>
            <a href="/6" className="flex mb-2 hover:text-pink-400 duration-300">＜前の年の演奏会</a>
              <a href="#top" className="flex mb-2 md:ml-10 hover:text-pink-400 duration-300">↑ページトップ</a>
              <a href="/8" className="flex md:ml-10 hover:text-pink-400 duration-300">次の年の演奏会＞</a>
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
              <img className="w-full center" src="/img/hana.png" width={1980} height={10}/>
          </div>
        </footer>
     </div>
  );
};