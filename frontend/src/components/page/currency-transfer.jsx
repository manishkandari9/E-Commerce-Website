"use client"

import { motion } from "framer-motion"

interface CheckmarkProps {
  size?: number
  strokeWidth?: number
  color?: string
  className?: string
}

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        delay: i * 0.2,
        type: "spring",
        duration: 1.5,
        bounce: 0.2,
        ease: "easeInOut",
      },
      opacity: { delay: i * 0.2, duration: 0.2 },
    },
  }),
}

export function Checkmark({ size = 100, strokeWidth = 2, color = "currentColor", className = "" }: CheckmarkProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      initial="hidden"
      animate="visible"
      style={{
        width: size,
        height: size,
        ...(className ? { className } : {})
      }}
    >
      <title>Animated Checkmark</title>
      <motion.circle
        cx="50"
        cy="50"
        r="40"
        stroke={color}
        variants={draw}
        custom={0}
        style={{
          strokeWidth,
          strokeLinecap: "round",
          fill: "transparent",
        }}
      />
      <motion.path
        d="M30 50L45 65L70 35"
        stroke={color}
        variants={draw}
        custom={1}
        style={{
          strokeWidth,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          fill: "transparent",
        }}
      />
    </motion.svg>
  )
}

export default function CurrencyTransfer() {
  return (
    <div style={{ 
      width: '100%',
      maxWidth: '384px',
      margin: '0 auto',
      padding: '24px',
      minHeight: '300px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#18181b',
      border: '1px solid #27272a',
      backdropFilter: 'blur(4px)'
    }}>
      <div style={{
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem'
      }}>
        <motion.div
          style={{ display: 'flex', justifyContent: 'center' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1],
            scale: {
              type: "spring",
              damping: 15,
              stiffness: 200,
            },
          }}
        >
          <div style={{ position: 'relative' }}>
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                filter: 'blur(20px)',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                borderRadius: '9999px'
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2,
                duration: 0.8,
                ease: "easeOut",
              }}
            />
            <Checkmark
              size={80}
              strokeWidth={4}
              color="rgb(16 185 129)"
              style={{
                position: 'relative',
                zIndex: 10,
                filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.1))'
              }}
            />
          </div>
        </motion.div>
        
        <motion.div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            width: '100%',
            textAlign: 'center'
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          <motion.h2
            style={{
              fontSize: '1.125rem',
              color: '#f4f4f5',
              letterSpacing: '-0.025em',
              fontWeight: 600,
              textTransform: 'uppercase'
            }}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.4 }}
          >
            Transfer Successful
          </motion.h2>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <motion.div
              style={{
                flex: 1,
                backgroundColor: 'rgba(63, 63, 70, 0.5)',
                borderRadius: '12px',
                padding: '12px',
                border: '1px solid rgba(63, 63, 70, 0.5)',
                backdropFilter: 'blur(4px)'
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1.2,
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    color: '#71717a',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.375rem'
                  }}>
                    <svg
                      style={{ width: '12px', height: '12px' }}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 19V5M5 12l7-7 7 7" />
                    </svg>
                    From
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '28px',
                      height: '28px',
                      borderRadius: '8px',
                      backgroundColor: '#18181b',
                      border: '1px solid #3f3f46',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: '#f4f4f5'
                    }}>
                      $
                    </span>
                    <span style={{ fontWeight: 500, color: '#f4f4f5' }}>500.00 USD</span>
                  </div>
                </div>

                <div style={{
                  width: '100%',
                  height: '1px',
                  background: 'linear-gradient(to right, transparent, #3f3f46, transparent)'
                }} />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    color: '#71717a',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.375rem'
                  }}>
                    <svg
                      style={{ width: '12px', height: '12px' }}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                    To
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '28px',
                      height: '28px',
                      borderRadius: '8px',
                      backgroundColor: '#18181b',
                      border: '1px solid #3f3f46',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: '#f4f4f5'
                    }}>
                      €
                    </span>
                    <span style={{ fontWeight: 500, color: '#f4f4f5' }}>460.00 EUR</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            style={{
              width: '100%',
              fontSize: '0.75rem',
              color: '#71717a',
              marginTop: '0.5rem',
              textAlign: 'center'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.4 }}
          >
            Exchange Rate: 1 USD = 0.92 EUR
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}