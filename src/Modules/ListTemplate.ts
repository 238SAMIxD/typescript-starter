/* eslint-disable prettier/prettier */
import Formatter from './Formatter.js';

export default class ListTemplate {
    constructor(private container: HTMLUListElement) {}

    render(item: Formatter, heading: string, position: 'start' | 'end') {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        const p = document.createElement('p');

        h4.textContent = heading;
        p.textContent = item.format();

        li.append(h4, p);

        if(position === 'start') {
            this.container.prepend(li);
        } else {
            this.container.append(li);
        }
    }
}
