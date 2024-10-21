'use client'
import React, { useEffect, useState } from 'react';

interface TimeRemaining {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

interface CountdownProps {
    targetDate: number; // Timestamp in milliseconds
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
    const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(interval);
                setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                setTimeRemaining({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <div>
            <div className='text-[#006BFF] flex gap-20'>
                <div className='flex flex-col items-center justify-center'>
                    <span className='text-6xl font-bold'>{timeRemaining.days} </span>
                    <span>Days</span>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <span className='text-6xl font-bold'>{timeRemaining.hours} </span>
                    <span>Days</span>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <span className='text-6xl font-bold'>{timeRemaining.minutes} </span>
                    <span>Days</span>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <span className='text-6xl font-bold'>{timeRemaining.seconds} </span>
                    <span>Days</span>
                </div>
            </div>
        </div>
    );
};

export default Countdown;