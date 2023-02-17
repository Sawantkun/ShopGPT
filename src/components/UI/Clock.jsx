import React, {useState, useEffect} from 'react'

const Clock = () => {
    const[days,setDays]=useState()
    const[hours,setHours]=useState()
    const[mins,setMins]=useState()
    const[sec,setSec]=useState()
    let interval;

    const countDown = ()=>{
        const destination = new Date('March 10, 2023')
        interval = setInterval(()=>{
            const now = new Date().getTime()
            const different=destination - now
            const days=Math.floor(different/(1000*60*60*24))
            const hours=Math.floor(different%(1000*60*60*24)/(1000*60*60))
            const mins=Math.floor(different%(1000*60*60)/(1000*60))
            const sec=Math.floor(different%(1000*60)/1000)
            if(destination<0) clearInterval(interval.current)
            else{
                setDays(days)
                setHours(hours)
                setMins(mins)
                setSec(sec)
            }
        })
    }
    useEffect(()=>{
        countDown();
    })

  return (
    <div className='clock_wrapper d-flex align-items-center gap-3'>
        <div className="clock_data d-flex align-items-center gap-3">
            <div className='text-center'>
                <h1 className='text-white fs-3 mb-2'>{days}</h1>
                <h5 className='text-white fs-6'>Days</h5>
            </div>
            <span className='text-white fs-3'>:</span>
        </div>

        <div className="clock_data d-flex align-items-center gap-3">
            <div className='text-center'>
                <h1 className='text-white fs-3 mb-2'>{hours}</h1>
                <h5 className='text-white fs-6'>Hours</h5>
            </div>
            <span className='text-white fs-3'>:</span>
        </div>

        <div className="clock_data d-flex align-items-center gap-3">
            <div className='text-center'>
                <h1 className='text-white fs-3 mb-2'>{mins}</h1>
                <h5 className='text-white fs-6'>Minutes</h5>
            </div>
            <span className='text-white fs-3'>:</span>
        </div>

        <div className="clock_data d-flex align-items-center gap-3">
            <div className='text-center'>
                <h1 className='text-white fs-3 mb-2'>{sec}</h1>
                <h5 className='text-white fs-6'>Seconds</h5>
            </div>
        </div>
    </div>
  )
}

export default Clock