import { SC_Container } from "@/container/styled"
import { useEffect, useState } from "react"
import { SC_CountdownInner, SC_CountdownItem } from "./styled"

export const Countdown = () => {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {

    const target = new Date('12/31/2023 23:59:59')

    const interval = setInterval(() => {
      const now = new Date()
      const difference = target.getTime() - now.getTime()

      const d = Math.floor(difference / (1000 * 60 * 60 * 24))
      setDays(d)

      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      setHours(h)

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      setMinutes(m)

      const s = Math.floor((difference % (1000 * 60)) / 1000)
      setSeconds(s)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <SC_Container>
      <SC_CountdownInner>

        <SC_CountdownItem>
          <span>{ days }</span>
          <span>Days</span>
        </SC_CountdownItem>

        <SC_CountdownItem>
          <span>{ hours }</span>
          <span>Hours</span>
        </SC_CountdownItem>

        <SC_CountdownItem>
          <span>{ minutes }</span>
          <span>Mins</span>
        </SC_CountdownItem>

        <SC_CountdownItem>
          <span>{ seconds }</span>
          <span>Secs</span>
        </SC_CountdownItem>
        
      </SC_CountdownInner>
    </SC_Container>
  )
}