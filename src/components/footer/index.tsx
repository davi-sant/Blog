import { FolderGit2, Linkedin } from "lucide-react";



export function Footer() {
  return (
    <header className="w-full h-14 bg-transparent flex items-center justify-center border-t border-slate-300">
      <nav className={`w-full max-w-screen-lg flex justify-between items-center`}>
        <a href="/posts" className={`flex h-full flex items-center flex-row gap-1 text-slate-700 hover:font-bold cursor-pointer`}>
          © 2024, Built with Next.Js
        </a>

        <ul className="flex gap-2">
          <li>
            <a className={`hover:font-bold`} href="/">
              <Linkedin className="text-slate-700" size={18} />
            </a>
          </li>
          <li>
            <a className={`hover:font-bold`} href="/">
              <FolderGit2 className="text-slate-700" size={18} />
            </a>
          </li>
        </ul>


        <ul className="flex gap-2">
          <li>
            <a className={`hover:font-bold`} href="/">
              Blog
            </a>
          </li>
          <li>
            //
          </li>
          <li>
            <a className={`hover:font-bold`} href="/">Sobre</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
