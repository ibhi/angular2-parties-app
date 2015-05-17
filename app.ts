/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, For} from 'angular2/angular2';
import {IParties} from './model/parties-model';
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
	parties: Array<IParties>;

	constructor(partiesService: PartiesService) {
		this.parties = partiesService.parties;
	}

}

bootstrap(PartiesComponent);
