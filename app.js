/// <reference path="typings/angular2/angular2.d.ts" />
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var parties_service_1 = require('./service/parties-service');
var PartiesComponent = (function () {
    function PartiesComponent(partiesService) {
        this.partiesService = partiesService;
        this.parties = this.partiesService.parties;
    }
    PartiesComponent.prototype.addParty = function (title, desc) {
        var party;
        party = {
            title: title,
            description: desc
        };
        this.partiesService.addParty(party);
        this.parties = this.partiesService.parties;
    };
    PartiesComponent = __decorate([
        angular2_1.Component({
            selector: 'parties-list',
            injectables: [parties_service_1.PartiesService]
        }),
        angular2_1.View({
            templateUrl: 'parties.html',
            directives: [angular2_1.For]
        }), 
        __metadata('design:paramtypes', [parties_service_1.PartiesService])
    ], PartiesComponent);
    return PartiesComponent;
})();
angular2_1.bootstrap(PartiesComponent);
