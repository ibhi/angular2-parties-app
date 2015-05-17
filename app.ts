/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, For} from 'angular2/angular2';
import {IParty} from './model/parties-model';
import {PartiesService} from './service/parties-service';

@Component({
	selector: 'parties-list',
	injectables: [PartiesService]
})

@View({
	templateUrl: 'parties.html',
	directives: [For]
})

class PartiesComponent{
	parties: Array<IParty>;
	partiesService: PartiesService;

	constructor(partiesService: PartiesService) {
		this.partiesService = partiesService;
		this.parties = this.partiesService.parties;
	}

	addParty(title: string, desc: string){
		var party: IParty;
		party = {
			title: title,
			description: desc
		}
		this.partiesService.addParty(party);
		this.parties = this.partiesService.parties;

	}

}

bootstrap(PartiesComponent);
