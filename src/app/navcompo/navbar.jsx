'use client'

import style from './nav.module.css'
import { IoMenu } from "react-icons/io5";
import Link from 'next/link';
import { MdCancel } from "react-icons/md";
import { useState } from "react";

export default function Navbar() {
    const [show, setShow] = useState(false);
    const setmenu = () => {
        setShow(!show);
    }
    return (
        <nav className={style.nav}>
            <Link href='/' className={style.navhead}>TopicList App</Link>
            {
                show ? <MdCancel className={style.inneri} size={25} color='#fff' onClick={setmenu} /> : <IoMenu className={style.inneri} size={25} color='#fff' onClick={setmenu} />
            }
            {
                show &&
                <div className={style.main_slider}>
                    <div className={style.slider}>
                        <Link href={'/addTopic'} className={style.lnk}>
                            Add Topic
                        </Link>
                    </div>
                </div>
            }
            <Link href={'/addTopic'} className={style.lnk2}>
                Add Topic
            </Link>
        </nav>
    )
}