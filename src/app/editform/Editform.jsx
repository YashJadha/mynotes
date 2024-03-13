'use client'
import style from './editform.module.css'
import Navbar from "../navcompo/navbar"
import { doPatch } from '../actions/reqActions';
import { redirect, useParams } from 'next/navigation';

export default function Editform() {    
    const {id} = useParams();
    const submithandler = async(formData) => {
        try{    
            let data = {};
            formData.forEach((value, key) => (data[key] = value)); 
            const res = await doPatch(`/topicroute/${id}`, data);
            if(res === true){
                redirect('/');
            }
        }
        catch(error){
            console.log('error to update form', error);
        }
    }
    return (
        <div className={style.mainform}>
            <Navbar />

            <form className={style.form} action={submithandler}>
                <input type="text" name="title" id="title" className={style.inpt} placeholder="Title" />
                <input type="text" name="description" id="description" className={style.inpt} placeholder="Description" />
                <button className={style.btn} type="submit">Submit</button>
            </form>
        </div>
    )
}
