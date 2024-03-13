'use client'
import { signIn, useSession } from 'next-auth/react';
import style from './log.module.css';
import { redirect } from 'next/navigation';

export default function LoginForm(){
    const session = useSession();
    console.log(session);

    const submithandler = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        let data = {};
        formData.forEach((value, key)=> (data[key]= value));
        const res = await signIn('credentials', data);
    }

    if(session.status === "authenticated"){
        redirect('/topiclist');
    }
    
    return(
        <main className={style.main}>
            <form className={style.form} onSubmit={submithandler}>
                <div className={style.maininpt}>
                    <label htmlFor="email" className={style.label}>Email :</label>
                    <input type="email" name="email" className={style.inpt} />
                </div>
                <div className={style.maininpt}>
                    <label htmlFor="password" className={style.label}>Password :</label>
                    <input type="password" name="password" className={style.inpt} />
                </div>
                <input type="submit" value='submit' className={style.btn}/>
            </form>
        </main>
    )
}