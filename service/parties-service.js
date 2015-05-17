var PartiesService = (function () {
    function PartiesService() {
        this.parties = [
            {
                title: 'Party 1',
                description: 'This is party 1'
            },
            {
                title: 'Party 2',
                description: 'This is party 3'
            },
            {
                title: 'Party 3',
                description: 'This is party 3'
            },
        ];
    }
    PartiesService.prototype.addParty = function (party) {
        this.parties.push(party);
    };
    return PartiesService;
})();
exports.PartiesService = PartiesService;
