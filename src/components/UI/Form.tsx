import React, { FormEvent, type ComponentPropsWithoutRef, useRef, useImperativeHandle, forwardRef } from 'react'

export type FormHandler = {
	clear: () => void
}
type Props = {
	onSave: (value: unknown) => void
} & ComponentPropsWithoutRef<'form'>

const Form = forwardRef<FormHandler, Props>(({ onSave, children, ...otherProps }, ref) => {
	const form = useRef<HTMLFormElement>(null)
	useImperativeHandle(
		// we use this hook when we want to expose a local function to other components
		// to do so, the component must be wrapped in a forwardRef
		ref, // first parameter is a ref, that will come through props
		() => {
			// second parameter is a function that returns all methods we want to expose
			return {
				clear() {
					form.current?.reset
				}
			}
		},
	)
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		const data = Object.fromEntries(formData)
		onSave(data)
		form.current?.reset() // as we used useRef linked to our form, we get all form methods in current.
	}
	return (
		<form {...otherProps} onSubmit={handleSubmit} ref={form}>
			{children}
		</form>
	)
})

export default Form