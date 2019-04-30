import React, {Component, ComponentClass} from "react";
import {Loader} from "../Loader/Loader";


export function AuthenticationHoc(): <P extends object>(WrappedComponent: ComponentClass<P>) => void {
	return <P extends object>(WrappedComponent: ComponentClass<P>) => {
		return class Authentication extends Component<P> {
			state = {
				loading: true,
			}
			
			componentDidMount(): void {
				console.log('...Authenticating')
				setTimeout(() => this.setState(() => ({loading: false})), 500)
			}
			
			render(): React.ReactNode {
				return this.state.loading ? <Loader/> : <WrappedComponent  {...this.props} />
			}
		}
	}
}

