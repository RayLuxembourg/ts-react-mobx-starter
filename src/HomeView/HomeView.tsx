import React, {Component} from "react";
import "./HomeView.scss";

import {Heart} from "../shared/components/Heart/Heart";

import {RouteComponentProps} from "react-router-dom";
import {AuthenticationHoc} from "../shared/components/Authentication/Authentication";
import {observer} from 'mobx-react';
import HeartStore from "../stores/HeartStore";
import {InjectStore} from "../shared/utils/injectStore";


type RouteParams = {}


type ClosetProps = {
	store: InstanceType<typeof HeartStore>
} & RouteComponentProps<RouteParams>


@AuthenticationHoc()
@InjectStore(new HeartStore())
@observer
class HomeView extends Component<ClosetProps> {
	
	
	render() {
		const {clickCount, isEvenCount, state, toggleHeart} = this.props.store
		return (
				<div id={'home-view'}>
					<Heart liked={state} onClick={toggleHeart}/>
					<div className="info">
						<h1>Click count {clickCount}</h1>
						<p>{isEvenCount ? 'Count is event' : 'Uneven count'}</p>
					</div>
				</div>
		)
	}
}


export default HomeView;
