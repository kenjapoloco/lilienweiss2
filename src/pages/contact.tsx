import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import "bootstrap/dist/css/bootstrap.min.css";
import React, { useRef, useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"],});
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"],});

export default function Contact() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const telRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("送信中・・・");
    console.log(nameRef.current?.value);

    let data = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      tel: telRef.current?.value,
      message: messageRef.current?.value,
    };

    await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) console.log("送信に成功しました");
    });
  };


  return ( 
    <div className={`${geistSans.className} ${geistMono.className} font-sans container grid items-center justify-items-center min-h-screen`}>
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
      <section className="text-gray-600 w-full flex flex-col items-center px-2">
           <h1 className="mt-25 mb-10 text-center text-2xl font-bold text-gray-900">メールでのお問い合わせ</h1>
            <form className="shadow-md rounded-md bg-white w-full max-w-2xl p-5" onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
                <div className="flex sm:items-center mb-6 flex-col sm:flex-row"><label className="block sm:w-1/3 font-bold sm:text-right mb-1 pr-4" htmlFor="name">お名前 <span className="text-red-600"> * </span></label><input className="block w-full sm:w-2/3 bg-gray-200 py-2 px-3 text-gray-700 border border-gray-200 rounded focus:outline-none focus:bg-white" id="name" type="text" placeholder="山田太郎" required ref={nameRef}/></div>
                <div className="flex sm:items-center mb-6 flex-col sm:flex-row"><label className="block sm:w-1/3 font-bold sm:text-right mb-1 pr-4"htmlFor="email">メールアドレス <span className="text-red-600"> * </span></label><input className="block w-full sm:w-2/3 bg-gray-200 py-2 px-3 text-gray-700 border border-gray-200 rounded focus:outline-none focus:bg-white" type="email" id="email" placeholder="yamada@example.com" required ref={emailRef}/></div>
                <div className="flex sm:items-center mb-6 flex-col sm:flex-row"><label className="block sm:w-1/3 font-bold sm:text-right mb-1 pr-4"htmlFor="tel">電話番号</label><input className="block w-36 bg-gray-200 py-2 px-3 text-gray-700 border border-gray-200 rounded focus:outline-none focus:bg-white" type="text" id="tel" placeholder="000-0000-0000" ref={telRef}/></div>
                <div className="flex sm:items-center mb-6 flex-col sm:flex-row"><label className="block sm:w-1/3 font-bold sm:text-right mb-1 pr-4"htmlFor="message">お問い合わせ内容 <span className="text-red-600"> * </span></label><textarea className="block w-full sm:w-2/3 bg-gray-200 py-2 px-3 text-gray-700 border border-gray-200 rounded focus:outline-none focus:bg-white" name="message" id="message" cols={30} rows={10} required ref={messageRef}/></div>
                <div className="flex justify-center"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded fucus:outline-none focus:shadow-outline mt-3" type="submit">メール送信</button></div>
            </form>
            <div className="">
              <Image className="mt-10 mb-5 ml-20 max-w-3/4 lg:ml-70" src="/img/1.png" alt="logo" width={540} height={540}/>
            </div>
      </section>
            {/* <h1 className="mt-15 mb-10 text-center text-2xl font-bold text-gray-900">メールでのお問い合わせ</h1> */}
            {/* <form className="ml-30 lg:ml-95" >
              <div className="mb-3 w-1/2"><label className="form-label" htmlFor="name">お名前</label><input className="form-control"type="text" id="name" required ref={nameRef}/></div>
              <div className="mb-3 w-1/2"><label className="form-label" htmlFor="email">メールアドレス</label><input className="form-control" type="email" id="email" required ref={emailRef}/></div>
              <div className="mb-3 w-1/2"><label className="form-label" htmlFor="message">メッセージ</label><textarea className="form-control" id="message" required ref={messageRef}/></div>
              <button className="btn btn-danger mb-10" type="submit">メール送信</button>
            </form> */}    
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
