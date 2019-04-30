import {action, computed, observable,} from "mobx";

export default class HeartStore {
	@observable state: boolean = false
	@observable clickCount: number = 0
	
	@computed get isEvenCount() {
		return this.clickCount % 2 === 0
	}
	
	@action.bound toggleHeart() {
		this.state = !this.state
		this.incrementCount()
	}
	
	@action.bound
	private incrementCount() {
		this.clickCount++
	}
	
}
