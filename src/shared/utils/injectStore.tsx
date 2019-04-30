import React, {Component, ComponentClass} from "react";

export function InjectStore<C>(store: C): <P extends object>(WrappedComponent: ComponentClass<P>) => void {
	return <P extends object>(WrappedComponent: ComponentClass<P>) => {
		return class Authentication extends Component<P> {
			
			componentDidMount(): void {
				console.log('...injecting', store.constructor.name)
			}
			
			render(): React.ReactNode {
				return <WrappedComponent store={store}  {...this.props}/>
			}
		}
	}
}
