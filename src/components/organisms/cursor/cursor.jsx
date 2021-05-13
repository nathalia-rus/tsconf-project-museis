import React, { useEffect, useState } from 'react'
import cx from 'classnames'

export const CursorContext = React.createContext('cursorContext')

const SUPPORTED_CURSORS = [false, 'pointer', 'right', 'left']

const CursorProvider = ({children}) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [cursor, setCursor] = useState(false)

    const onMouseMove = (event) => {

      setTimeout(function(){ const { pageX: x, pageY: y } = event
        setMousePosition({ x, y }) }, 60);
       
    }

    useEffect(() => {
        document.addEventListener('mousemove', onMouseMove)

        return () => {
            document.removeEventListener('mousemove', onMouseMove)
        }
    })

    const { x, y } = mousePosition

    const onCursor = (cursorType) => {
        cursorType =
            (SUPPORTED_CURSORS.includes(cursorType) && cursorType) || ''
        setCursor(cursorType)
        return "";
    }

//  function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }
    return (
        <CursorContext.Provider value={{ onCursor }}>
            <ins
                className={cx('movable', {
                    active: !!cursor,
                    [`cursor-${cursor}`]: !!cursor,
                })}
                style={{
                    left: `${x}px`,
                    top: `${y}px`,
                }}
            />

                  <ins
                className={cx('movable2', {
                    active: !!cursor,
                    [`cursor-${cursor}`]: !!cursor,
                })}
                style={{
                    left: `${x+30}px`,
                    top: `${y+30}px`,
                   
                }}
            />
              <ins
                className={cx('movable3', {
                    active: !!cursor,
                    [`cursor-${cursor}`]: !!cursor,
                })}
                style={{
                    left: `${x+50}px`,
                    top: `${y+50}px`,
                   
                }}
            />

             <ins
                className={cx('movable4', {
                    active: !!cursor,
                    [`cursor-${cursor}`]: !!cursor,
                })}
                style={{
                    left: `${x-50}px`,
                    top: `${y-50}px`,
                   
                }}
            />

                         <ins
                className={cx('movable5', {
                    active: !!cursor,
                    [`cursor-${cursor}`]: !!cursor,
                })}
                style={{
                    left: `${x-50}px`,
                    top: `${y-50}px`,
                   
                }}
            />
            {children}
        </CursorContext.Provider>
    )
}

export default CursorProvider
