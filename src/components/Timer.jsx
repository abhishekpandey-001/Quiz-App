import React, { useEffect, useState } from 'react'

const Timer = () => {

    const [leftTime, setLeftTime] = useState(5);
    const [displayTime, setDisplayTime] = useState('');

    //left time logic
    useEffect(()=>{
        let intervalId = setInterval(() => {
            setLeftTime(prev => {
                if(prev<=0){
                    clearInterval(intervalId);
                    return 0;
                }
                return prev - 1;
            })
        }, 1000);
    }, [])


    //time format logic: showing how the time will be displayed on the screen
    useEffect(()=>{
        let formatedTime = (`${(Math.floor(leftTime/60)).toString().padStart(2,0)} : ${(leftTime%60).toString().padStart(2,0)}`)
        setDisplayTime(formatedTime)
    }, [leftTime])



  return (
    <div>
      🕒Time left: {displayTime}
    </div>
  )
}

export default Timer
