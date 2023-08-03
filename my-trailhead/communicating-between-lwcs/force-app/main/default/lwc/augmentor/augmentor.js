import { LightningElement } from 'lwc';

export default class Augmentor extends LightningElement {
    startCounter = 0;
    handleStartChange(event) {
        this.startCounter = parseInt(event.target.value);
    }

    handleMaximizeCounter(event) {
        const number = event.target.dataset.number;
        const event2 = new CustomEvent('maximize', {
            detail: number
        })
        this.template.querySelector('c-numerator').maximizeCounter(event2);
    }
}