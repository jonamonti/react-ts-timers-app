import React, { useRef } from 'react'
import Form, { FormHandler } from './UI/Form'
import Input from './UI/Input.tsx'
import Button from './UI/Button.tsx'
import { useTimersContext } from '../store/timers-context'

type Props = {}

const AddTimer = (props: Props) => {
	const { addTimer } = useTimersContext()
	const form = useRef<FormHandler>(null)
	const handleSaveTimer = (data: unknown) => {
		const extractData = data as { name: string; duration: string }
		addTimer({ name: extractData.name, duration: Number(extractData.duration) })
		form.current?.clear()
	}
	return (
		<Form ref={form} onSave={handleSaveTimer} id="add-timer">
			<Input id={'name'} label={'Name'} type='text' />
			<Input id={'duration'} label={'Duration'} type='number' />
			<p>
				<Button>Add Timer</Button>
			</p>
		</Form>
	)
}

export default AddTimer