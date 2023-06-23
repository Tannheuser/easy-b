import Link from 'next/link';

import { Logo } from './logo'

export function Header() {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <Link href="/" className="flex flex-row items-center normal-case">
          <Logo />
          <div className="px-1">Easy Budgets</div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="decoration-base-100">
            <Link href="/incomes">Incomes</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown">
        <label tabIndex={0} className="cursor-pointer lg:hidden mx-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Item 1</a></li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <div className="hidden lg:block">Login</div>
      </div>
    </div>
  )
}
