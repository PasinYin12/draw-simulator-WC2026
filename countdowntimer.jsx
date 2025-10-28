import React, { useState, useEffect } from 'react';
import WC26theme from './assets/WC26theme.jpeg'; 

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        // Target date: December 5, 2025, 12:00 PM ET
        // ET is UTC-5, so 12 PM ET = 17:00 UTC
        const targetDate = new Date('2025-12-05T17:00:00Z');

        const calculateTimeLeft = () => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / (1000 * 60)) % 60);
                const seconds = Math.floor((difference / 1000) % 60);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);
        return () => clearInterval(timer);
    }, []);

      const styles = {
        container: {
            textAlign: 'center',
            margin: '1rem auto',
            padding: '1.5rem 1rem',
            backgroundImage: `url(${WC26theme})`,
            backgroundSize: 'cover',           // Changed: Makes image cover the container
            backgroundPosition: 'center',      // Added: Centers the image
            backgroundRepeat: 'no-repeat',     // Added: Prevents image repetition
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            maxWidth: '500px',
            position: 'relative',
            overflow: 'hidden'
        },
        innerContainer: {
            background: 'rgba(0, 0, 0, 0.3)',
            borderRadius: '10px',
            padding: '1rem',
        },
        title: {
            color: 'white',
            fontSize: '1.5rem',
            marginBottom: '0.25rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
        },
        subtitle: {
            color: '#00CBA6',
            fontSize: '1rem',
            marginBottom: '1rem',
            fontWeight: '600',
            textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
            letterSpacing: '1px'
        },
        timer: {
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
            flexWrap: 'wrap',
            marginBottom: '1rem'
        },
        timeUnit: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(20px)',
            borderRadius: '10px',
            padding: '0.75rem 1rem',
            minWidth: '60px',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
            transition: 'all 0.3s ease'
        },
        timeValue: {
            fontSize: '1.8rem',
            fontWeight: '800',
            color: 'white',
            lineHeight: '1',
            fontVariantNumeric: 'tabular-nums',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
            background: 'linear-gradient(180deg, #FFFFFF 0%, #E0E0E0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
        },
        timeLabel: {
            fontSize: '0.65rem',
            color: '#00CBA6',
            textTransform: 'uppercase',
            marginTop: '0.25rem',
            fontWeight: '600',
            letterSpacing: '1px',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
        },
        date: {
            color: 'white',
            fontSize: '0.75rem',
            lineHeight: '1.4',
            fontWeight: '500',
            textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
            margin: '0'
        },
        location: {
            color: '#00CBA6',
            fontWeight: '600',
            fontSize: '0.8rem'
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.innerContainer}>
                <h2 style={styles.title}>Official draw will be held in...</h2>
                <div style={styles.timer}>
                    <div 
                        style={styles.timeUnit}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.border = '2px solid rgba(0, 203, 166, 0.8)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.border = '2px solid rgba(255, 255, 255, 0.3)';
                        }}
                    >
                        <span style={styles.timeValue}>{timeLeft.days}</span>
                        <span style={styles.timeLabel}>Days</span>
                    </div>
                    <div 
                        style={styles.timeUnit}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.border = '2px solid rgba(0, 153, 214, 0.8)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.border = '2px solid rgba(255, 255, 255, 0.3)';
                        }}
                    >
                        <span style={styles.timeValue}>{String(timeLeft.hours).padStart(2, '0')}</span>
                        <span style={styles.timeLabel}>Hours</span>
                    </div>
                    <div 
                        style={styles.timeUnit}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.border = '2px solid rgba(255, 107, 0, 0.8)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.border = '2px solid rgba(255, 255, 255, 0.3)';
                        }}
                    >
                        <span style={styles.timeValue}>{String(timeLeft.minutes).padStart(2, '0')}</span>
                        <span style={styles.timeLabel}>Min</span>
                    </div>
                    <div 
                        style={styles.timeUnit}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.border = '2px solid rgba(255, 0, 128, 0.8)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.border = '2px solid rgba(255, 255, 255, 0.3)';
                        }}
                    >
                        <span style={styles.timeValue}>{String(timeLeft.seconds).padStart(2, '0')}</span>
                        <span style={styles.timeLabel}>Sec</span>
                    </div>
                </div>
                <p style={styles.date}>
                    December 5, 2025 • 12:00 PM ET • <span style={styles.location}>Washington, D.C.</span>
                </p>
            </div>
        </div>
    );
};

export default CountdownTimer;