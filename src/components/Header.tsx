import React, { useContext } from 'react'
import Button from './UI/Button'
import { useTimersContext } from '../store/timers-context'

type Props = {}

const Header = (props: Props) => {
	const timerCtx = useTimersContext()
	console.log(timerCtx)
	return (
		<header>
			<h1>React timer</h1>
			<Button onClick={timerCtx.isRunning ? timerCtx.stopTimer : timerCtx.startTimer}>{timerCtx.isRunning ? "Stop" : "Start"} timers</Button>
		</header>
	)
}

export default Header