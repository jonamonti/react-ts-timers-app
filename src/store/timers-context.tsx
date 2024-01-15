import { ReactNode, createContext, useContext, useReducer } from "react";

export type Timer = {
	name: string
	duration: number
}
type TimersState = {
	isRunning: boolean
	timers: Timer[]
}

// initialState for useReducer hook
const initialState: TimersState = {
	isRunning: true,
	timers: []
}

type TimersMethods = {
	addTimer: (timerData: Timer) => void
	stopTimer: () => void
	startTimer: () => void
}

type TimerContext = TimersState & TimersMethods
type TimerContextProvider = {
	children: ReactNode
}

const TimersContext = createContext<TimerContext | null>(null)
// createContext returns an object that needs to be stored in a variable
// because we will need to access the object from other components, we export it

export const useTimersContext = () => {
	const timersCtx = useContext(TimersContext)

	if (timersCtx === null) {
		throw new Error('TimersContext should not be null')
	}

	return timersCtx
	// timersCtx cant be null, that's why we create this custom hook
	// to retun timersCtx only when it's not null
}

type NoPayloadActions = {
	type: 'START_TIMER' | 'STOP_TIMER'
}

type AddTimerAction = {
	type: "ADD_TIMER"
	payload: Timer
}

type Action = NoPayloadActions | AddTimerAction

const timersReducer = (state: TimersState, action: Action): TimersState => {
	if (action.type === "START_TIMER") {
		return {
			...state,
			isRunning: true
		}
	}
	if (action.type === "STOP_TIMER") {
		return {
			...state,
			isRunning: false
		}
	}
	if (action.type === "ADD_TIMER") {
		return {
			...state,
			timers: [...state.timers, { name: action.payload.name, duration: action.payload.duration }]
		}
	}
	return state
}


const TimersContextProvider = ({ children }: TimerContextProvider) => {
	const [timerState, dispatch] = useReducer(timersReducer, initialState)
	const ctx: TimerContext = {
		timers: timerState.timers,
		isRunning: timerState.isRunning,
		addTimer(timerData) {
			dispatch({ type: "ADD_TIMER", payload: timerData })
		},
		startTimer() {
			dispatch({ type: "START_TIMER" })
		},
		stopTimer() {
			dispatch({ type: "STOP_TIMER" })
		},
	}
	return <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider> // this provider needs a value prop, that will be like the state in redux
}

export default TimersContextProvider