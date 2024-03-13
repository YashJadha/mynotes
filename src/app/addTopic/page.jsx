'use client'
import Navbar from '../navcompo/navbar';
import style from './topics.module.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'
import { useState } from 'react';
import { doPost } from '../actions/reqActions';
import { redirect } from 'next/navigation';

export default function Addtopic() {
    /*

    */
    const [toasting, setToasting] = useState(true);
    const submithandler = async (formData) => {
        let data = {};
        formData.forEach((value, key) => (data[key] = value));
        const res = await doPost('/topicroute', data);
        if (res) {
            redirect('/topiclist');
        }
        else if (!res) {
          console.log('value not submitted :-');
        }
    }
    return (
        <div className={style.mainform}>
            <Navbar />

            <form className={style.form} action={submithandler}>
                <input type="text" name="title" id="title" className={style.inpt} placeholder="Title" />
                <input type="text" name="description" id="description" className={style.inpt} placeholder="Description" />
                <input className={style.btn} type="submit" value='submit'/>
            </form>
        </div>

    )
}