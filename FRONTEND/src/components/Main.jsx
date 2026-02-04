import { Link } from "react-router-dom"

function Main(){
    return (
        <>
        <div className='flex flex-col'>
        <div className="container m-5 bg-slate-100 space-y-6 p-15 ml-20">
            <div className="text-center m-1 p-10">
                <h1>Stock prediction</h1>
                <p className="items-center">La vie dici bas est tres ephemere et toi mo frere que fais tu dans la vie et siy yrb nv bb bcb jcbhdchbc j fj fh  hh  ifjih g hv nfhgvvggshvfg bh fhi h uh gv huhuggcchc uv ugvtu hghuugvgtghhghhhgv;tigh;hbphbij'dhd </p>
                <Link to="/Dashboard" className="bg-blue-400 hover:bg-blue-700 hover:text-slate-900 text-slate-600 border border-slate-700">Expore Now</Link>
            </div>
        </div>
        </div>
        </>
    )
}
export default Main