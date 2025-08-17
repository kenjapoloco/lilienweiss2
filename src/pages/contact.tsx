import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useRef, useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"],});
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"],});

export default function Contact() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("送信中・・・");
    console.log(nameRef.current?.value);

    let data = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
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
      <div className="container mt-5">
            <h1 className="mt-5 text-center">メールでのお問い合わせ</h1>
            <form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
        >
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              名前
            </label>
            <input
              className="form-control"
              type="text"
              id="name"
              required
              ref={nameRef}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              メールアドレス
            </label>
            <input
              className="form-control"
              type="email"
              id="email"
              required
              ref={emailRef}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              メッセージ
            </label>
            <textarea
              className="form-control"
              id="message"
              required
              ref={messageRef}
            />
          </div>
          <button className="btn btn-danger" type="submit">
            メール送信
          </button>
        </form>
        <div className="w-2/3">
           <Image className="mb-5" src="/img/1.png" alt="logo" width={1920} height={540}/>
        </div>
        <footer>
          <div className='flex pt-3 pb-15 border-t border-green-200  w-full pl-[6vw] lg:pl-[10vw] text-[2vw] font-bold '>
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
    </div>
  );
};
