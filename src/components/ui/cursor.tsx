'use client'

import type { MotionStyle } from 'motion/react'
import { cn } from '@/utils'
import { Cursor as MotionCursor } from 'motion-cursor'
import { AnimatePresence, motion } from 'motion/react'
import React, { useCallback, useMemo, useState } from 'react'

type CustomCursorProps = React.ComponentPropsWithRef<typeof MotionCursor>

interface CursorEntity extends Omit<CustomCursorProps, 'children'> {
  tooltipContent: React.ReactNode
  tooltipClassName?: string

  consumerClassName?: string
}

/**
 * have to use style over className for the Cursor component ⤵
 *
 *
 * The React DOM style prop, enhanced with support for MotionValues and separate transform values.
 */
const Cursor: React.FC<React.PropsWithChildren<CursorEntity>> = ({
  children,
  tooltipContent,
  style,
  tooltipClassName,
  className,
  consumerClassName,
  ...cursorProps
}) => {
  const [isHovering, setIsHovering] = useState(false)

  const handleHoverStart = useCallback(() => setIsHovering(true), [])
  const handleHoverEnd = useCallback(() => setIsHovering(false), [])
  const defaultCursorStyle = useMemo(
    () =>
      ({
        backgroundColor: '#1f2937',
        borderRadius: 10,
        borderWidth: '2px',
        borderColor: '#f5f5f5',
        borderCollapse: 'collapse',

        ...style,
      }) satisfies MotionStyle,
    [style],
  )
  return (
    <>
      <AnimatePresence>
        {isHovering && (
          <MotionCursor
            {...cursorProps}
            className={cn(className)}
            follow
            style={defaultCursorStyle}
            offset={{ x: -20, y: 20 }}
            variants={{ exit: { opacity: 0 } }}
          >
            <div
              className={cn(
                'm-0 p-[0.9375rem]  text-lg tracking-tight text-[#f5f5f5]',
                tooltipClassName,
              )}
            >
              {tooltipContent}
            </div>
          </MotionCursor>
        )}
      </AnimatePresence>
      <motion.div
        className={cn(consumerClassName)}
        onHoverEnd={handleHoverEnd}
        onHoverStart={handleHoverStart}
      >
        {children}
      </motion.div>
    </>
  )
}

Cursor.displayName = 'Cursor'

export { Cursor, type CursorEntity }
