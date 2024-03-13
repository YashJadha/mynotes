'use client'
import style from './topic.module.css'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Link from 'next/link';
import { useState } from 'react';
import Navbar from '../navcompo/navbar';
import { useEffect } from 'react';
import Loading from '../loading/Loading';
import RevmoveCompo from '../removeCompo/removecompo';

export default function TopicsList() {

    const [isloading, setIsloading] = useState(true);
    const [apidata, setApidata] = useState([]);
    const apifetch = async () => {
        try {
            const data = await fetch('http://localhost:3000/api/topicroute');
            const res = await data.json();
            setApidata(res.data)
            setIsloading(false);
        }
        catch (error) {
            console.log('error');
        }
    }

    useEffect(() => {
        apifetch();
    }, []);
    return (

        <div className={style.mainform}>
            <Navbar />
            {
                isloading ? <Loading /> :
                    apidata.map((element) => (
                        <>
                            <div className={style.topics}>
                                <div className={style.maintopoic}>
                                    <div className={style.title}>{element.title}</div>
                                    <div className={style.description}>{element.description}</div>
                                </div>
                                <div className={style.icons}>
                                    <Link href={`/editTopics/${element._id}`}>
                                        <FaEdit size={23} color='#0080ff' className={style.inneri} />
                                    </Link>

                                    <RevmoveCompo id={element._id}/>
                                </div>
                            </div>
                        </>
                    ))
            }

        </div>
    )
}