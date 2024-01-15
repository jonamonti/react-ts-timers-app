import { useTimersContext } from '../store/timers-context.tsx'
import Timer from './Timer.tsx'


const Timers = () => {
	const { timers } = useTimersContext()
	return (
		<ul>
			{timers.map((timer, i) => {
				return (
					<li key={i}>
						<Timer {...timer} />
					</li>

				)
			})}
		</ul>
	)
}

export default Timers