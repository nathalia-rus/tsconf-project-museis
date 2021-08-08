import React, { useEffect, useState } from 'react'
import cx from 'classnames'
import styled from 'styled-components'
import { device } from '../../templates/devices/devices'

export const CursorContext = React.createContext('cursorContext')


const Desktop = styled.div`
    @media ${device.mobile_and_ipad} {
        display: none;
    }
`


const SUPPORTED_CURSORS = [false, 'pointer', 'right', 'left']

const CursorProvider = ({children}) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [cursor, setCursor] = useState(false)

    const onMouseMove = (event) => {

      setTimeout(function(){ const { pageX: x, pageY: y } = event
        setMousePosition({ x, y }) }, 0);
       
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
          <Desktop>
            <img
            src={"/cursorcustom.png"}
            alt="o"
                className={cx('movable', {
                    active: !!cursor,
                    [`cursor-${cursor}`]: !!cursor,
                })}
                style={{
                    left: `${x}px`,
                    top: `${y}px`,
                }}
            /></Desktop>
  

          

                  <ins
                className={cx('movable2', {
                    active: !!cursor,
                    [`cursor-${cursor}`]: !!cursor,
                })}
                style={{
                    left: `${x+20}px`,
                    top: `${y+60}px`,
                   
                }}
            />
              <ins
                className={cx('movable3', {
                    active: !!cursor,
                    [`cursor-${cursor}`]: !!cursor,
                })}
                style={{
                    left: `${x+10}px`,
                    top: `${y+80}px`,
                   
                }}
            />
{/* 
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
            /> */}
            {children}
        </CursorContext.Provider>
    )
}

export default CursorProvider
