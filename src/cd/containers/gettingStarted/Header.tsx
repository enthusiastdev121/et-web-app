import Link from 'next/link'
import { Router } from 'next/router'
import React, { useState } from 'react'

function Header(active:any) {
    const [navBar, setNavBar] = useState(true)
    
   
  
    return (
        <div>
            <header className='flex justify-center items-center '>
                <div className={navBar ? 'logo_img ' : 'logo_img'}><img src='/svg/logo.svg' alt='Logo' /></div>
                <div className='menus flex flex-wrap'>
                    <Link href={{ pathname: '/cd/getting-started', query: { keyword: 'talents' } }}><a className={active.activeTab === "talents" ? 'active' : ''}><span>1</span>Talents</a></Link>
                    <Link href={{ pathname: '/cd/getting-started', query: { keyword: 'project' } }}><a className={active.activeTab === "project" ? 'active' : ''} ><span>2</span>Project</a></Link>
                    <Link href={{ pathname: '/cd/getting-started', query: { keyword: 'organization' } }}><a className={active.activeTab === "organization" ? 'active' : ''} ><span>3</span>Organization</a></Link>
                    <Link href={{ pathname: '/cd/getting-started', query: { keyword: 'info' } }}><a className={active.activeTab === "info" ? 'active' : ''} ><span>4</span>Info page</a></Link>
                </div>
            </header>
        </div>
    )
}

export default Header;

