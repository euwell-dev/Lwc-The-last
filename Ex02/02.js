import { LightningElement, wire } from 'lwc';
import Opp5 from '@salesforce/apex/Bololo.Opp5';

export default class Oportunidades extends LightningElement {
    @wire(Opp5) opps;
}
