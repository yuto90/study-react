import Image from "next/image";
import { ReactElement, useCallback } from "react";
import Link from "next/link";

interface Props {
  title: string;
  code: ReactElement;
}
// propsはオブジェクトで渡ってくる
export function Headline(props: Props) {
  // Reactが提供する型定義で、<a> タグのクリックイベントに適用される型
  // useCallback: コンポーネントが再レンダリングされても関数は再生成されなくなる
  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    console.log(e.target);
    // 画面がリロードされてしまうのを止める
    e.preventDefault()
  }, []);

  return (
    <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        Get started by editing&nbsp;
        {props.code}
      </p>
      <div>
        <Link href="/">Index</Link>
        <br />
        <Link href="/about">About</Link>
        <br />
        <a href="" onClick={handleClick}>
          ボタン
        </a>
      </div>

      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <a className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0" href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
          By <Image src="/vercel.svg" alt="Vercel Logo" className="dark:invert" width={100} height={24} priority />
        </a>
      </div>
    </div>
  );
}
