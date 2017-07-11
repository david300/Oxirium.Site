app.controller("SelectorModalController", function ($scope, $timeout, $uibModal, items, header, $uibModalInstance, options) {
    angular.extend($scope, {
        items: items,
        header: header,
        headers: Object.keys(items[0]),
        Select: Select,
        Cancel: Cancel,
        ToggleAll: ToggleAll,
        isMultiSelect: options.isMultiSelect,
        OptionToggled: OptionToggled,
        ConfirmSelection: ConfirmSelection
    });

    function Select(item) {
        if (!$scope.isMultiSelect)
            $uibModalInstance.close([item]);
        else {
            item.selected = !item.selected;
            OptionToggled();
        }
    };

    function ConfirmSelection() {
        var filteredRows = _.filter(items, function (item) {
            return item.selected;
        });
        var strippedRows = _.map(filteredRows, function (row) {
            return _.omit(row, ['selected']);
        });
        $uibModalInstance.close(strippedRows);
    }

    function ToggleAll() {
        var toggleStatus = $scope.isAllSelected;
        angular.forEach($scope.items, function (itm) {
            itm.selected = toggleStatus;
        });
    }

    function OptionToggled() {
        $scope.isAllSelected = $scope.items.every(function (itm) {
            return itm.selected;
        })
    }

    function Cancel() {
        $uibModalInstance.dismiss('cancel');
    };
});