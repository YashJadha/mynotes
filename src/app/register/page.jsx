'use client'
import { redirect } from 'next/navigation';
import { doPost } from '../actions/reqActions';
import style from './register.module.css'
export default function Register() {

    const submithandler = async (FormData) => {
        // e.preventDefault();
        // const formdata = new FormData(e.currentTarget);
        let data = {};
        FormData.forEach((value, key)=> (data[key] = value));
        const res = await doPost('/registerroute', data);
        console.log(res);
        if(res){
            redirect('/login');
        }
    }

    return (
        <section className={style.mainform}>
            <div className={style.head}>
                Register Here
            </div>
            <form className={style.form} action={submithandler}>
            <div className={style.maininpt}>
                    <label htmlFor="name" className={style.lable}>username :</label>
                    <input type="text" className={style.inpt} name='name' />
                </div>
                <div className={style.maininpt}>
                    <label htmlFor="email" className={style.lable}>Email :</label>
                    <input type="email" className={style.inpt} name='email' />
                </div>
                <div className={style.maininpt}>
                    <label htmlFor="password" className={style.lable}>Password :</label>
                    <input type="password" className={style.inpt} name='password' />
                </div>
                <button type="submit" className={style.btn}>Submit</button>
            </form>
        </section>
    )
}