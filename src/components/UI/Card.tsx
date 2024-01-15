import React, { ReactElement } from 'react'

type Props = {
	title: string
	actions: ReactElement
	children: ReactElement
}

const Card = ({ title, actions, children }: Props) => {
	return (
		<div id='generic-card'>
			{title}
			{children}
			{actions}
		</div>
	)
}

export default Card