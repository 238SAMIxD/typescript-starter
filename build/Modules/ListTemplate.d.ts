import Formatter from './Formatter.js';
export default class ListTemplate {
    private container;
    constructor(container: HTMLUListElement);
    render(item: Formatter, heading: string, position: 'start' | 'end'): void;
}
