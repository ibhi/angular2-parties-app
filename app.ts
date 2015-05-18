import {Component, View, bootstrap, For} from 'angular2/angular2';
import {FormBuilder, Validators, formDirectives, ControlGroup} from 'angular2/forms';
import {IParty} from 'model/parties-model';
import {PartiesService} from 'service/parties-service';

@Component({
	selector: 'parties-list',
	injectables: [PartiesService, FormBuilder]
})

@View({
	templateUrl: 'parties.html',
	directives: [For, formDirectives]
})

class PartiesComponent{
	parties: Array<IParty>;
	partiesService: PartiesService;
	party: ControlGroup;

	constructor(partiesService: PartiesService, fb: FormBuilder) {
		this.partiesService = partiesService;
		this.parties = this.partiesService.parties;
		this.party = fb.group(
			{
				title: ['', Validators.required],
				description: ['', Validators.required]
			}
		)
	}

	addParty(){
		this.partiesService.addParty(this.party.value);
	}

}

bootstrap(PartiesComponent);
