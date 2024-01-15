import Container from './UI/Container'
import { type Timer } from '../store/timers-context'


const Timer = ({ name, duration }: Timer) => {
	return (
		<Container as={'article'}>
			<h2>{name}</h2>
			<h2>{duration}</h2>
		</Container>
	)
}

export default Timer