import { type ElementType } from "react"
import { ContainerT } from "./types";


function Container<C extends ElementType>({ as, children, ...props }: ContainerT<C>) {
	const Container = as || 'div';
	return (<Container {...props}>{children}</Container>)
}

export default Container
