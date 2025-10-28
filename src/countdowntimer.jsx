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
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
      maxWidth: '700px',
      width: '95%',              // 👈 ensures gap on both sides
      boxSizing: 'border-box'
    },
    innerContainer: {
      background: 'rgba(0, 0, 0, 0.3)',
      borderRadius: '10px',
      padding: '1rem'
    },
    title: {
      color: 'white',
      fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
      marginBottom: '0.5rem',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
    },
    timerGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)', // always 4 columns
      gap: '0.5rem',
      marginBottom: '1rem'
    },
    timeUnit: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: 'rgba(255, 255, 255, 0.15)',
      backdropFilter: 'blur(20px)',
      borderRadius: '10px',
      padding: 'clamp(0.4rem, 2vw, 0.75rem)',
      border: '2px solid rgba(255, 255, 255, 0.3)',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    timeValue: {
      fontSize: 'clamp(1rem, 5vw, 1.8rem)',
      fontWeight: '800',
      color: 'white',
      lineHeight: '1',
      fontVariantNumeric: 'tabular-nums',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)'
    },
    timeLabel: {
      fontSize: 'clamp(0.5rem, 2vw, 0.65rem)',
      color: '#00CBA6',
      textTransform: 'uppercase',
      marginTop: '0.25rem',
      fontWeight: '600',
      letterSpacing: '1px',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
    },
    date: {
      color: 'white',
      fontSize: 'clamp(0.6rem, 2vw, 0.75rem)',
      lineHeight: '1.4',
      fontWeight: '500',
      textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
      margin: '0'
    },
    location: {
      color: '#00CBA6',
      fontWeight: '600'
    }
  };

  const renderBox = (value, label, hoverColor) => (
    <div
      style={styles.timeUnit}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.border = `2px solid ${hoverColor}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.border = '2px solid rgba(255, 255, 255, 0.3)';
      }}
      onTouchStart={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.border = `2px solid ${hoverColor}`;
      }}
      onTouchEnd={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.border = '2px solid rgba(255, 255, 255, 0.3)';
      }}
    >
      <span style={styles.timeValue}>{value}</span>
      <span style={styles.timeLabel}>{label}</span>
    </div>
  );

  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        <h2 style={styles.title}>Official draw will be start in...</h2>
        <div style={styles.timerGrid}>
          {renderBox(timeLeft.days, 'Days', 'rgba(0, 203, 166, 0.8)')}
          {renderBox(String(timeLeft.hours).padStart(2, '0'), 'Hours', 'rgba(0, 153, 214, 0.8)')}
          {renderBox(String(timeLeft.minutes).padStart(2, '0'), 'Min', 'rgba(255, 107, 0, 0.8)')}
          {renderBox(String(timeLeft.seconds).padStart(2, '0'), 'Sec', 'rgba(255, 0, 128, 0.8)')}
        </div>
        <p style={styles.date}>
          December 5, 2025 • 12:00 PM ET • <span style={styles.location}>Washington, D.C.</span>
        </p>
      </div>
    </div>
  );
};

export default CountdownTimer;
