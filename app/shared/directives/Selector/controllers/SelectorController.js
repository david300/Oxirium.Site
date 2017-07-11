app.controller("SelectorController", function ($scope, $timeout, $uibModal) {

    function Select() {
        var vm = this;
        vm.modalInstance = {};

        this.Search = function Search() {
            $scope.isSearching = true;
            if (!$scope.getItems())
                this.ResultNotFound();
            else $scope.getItems()().then(function (result) {
                if (result.length > 0)
                    vm.ResultFound(result);
                else vm.ResultNotFound();
            });
        }

        this.ResultFound = function ResultFound(result) {
            var filtered = result.filter(function (el) {
                return _.findIndex($scope.selected, el) < 0;
            });
            if (filtered.length > 0)
                vm.OpenModal(filtered);
            else vm.ResultNotFound();
        }

        this.ResultNotFound = function ResultNotFound() {
            $scope.emptyResponse = true;
            $timeout(function () {
                $scope.emptyResponse = false;
            }, 3000);
            $scope.isSearching = false;
        }

        this.OpenModal = function OpenModal(items) {
            vm.modalInstance = $uibModal.open({
                templateUrl: 'app/shared/directives/Selector/views/SelectorModal.html',
                controller: 'SelectorModalController',
                resolve: {
                    items: function () {
                        return items;
                    },
                    header: function () {
                        return $scope.searchLabel;
                    },
                    options: function () {
                        return $scope.options || {};
                    }
                },
                backdrop: 'static',
                keyboard: false
            });

            vm.modalInstance.result.then(function (selectedItems) {
                vm.ModalConfirmSelection(selectedItems);
                $scope.isSearching = false;
                $scope.isSelected = true;
            }, function () {
                $scope.isSearching = false;
            });
        }
    }

    function SingleSelect() {
        this.RemoveSelection = function RemoveSelection() {
            $scope.isSelected = false;
            $scope.searchItem = null;
            $scope.selected = null;
        }

        this.ModalConfirmSelection = function ModalConfirmSelection(selectedItems) {
            var composedSelection = "";
            selectedItems.forEach(function (selectedItem) {
                composedSelection += ParseItemDescription(selectedItem);
            })
            $scope.searchItem = composedSelection;
            $scope.selected = selectedItems;
        }
    }

    function MultiSelect() {
        this.RemoveSelection = function RemoveSelection(index) {
            $scope.selected.splice(index, 1);
            if ($scope.selected.length == 0)
                $scope.isSelected = false;
        }

        this.ModalConfirmSelection = function ModalConfirmSelection(selectedItems) {
            $scope.searchItem = "";
            $scope.selected = $scope.selected.concat(selectedItems);
        }
    }

    if ($scope.options.isMultiSelect) {
        Select.prototype = new MultiSelect();
    } else Select.prototype = new SingleSelect();

    var select = new Select();

    angular.extend($scope, {
        InputKeypress: InputKeypress,
        Select: select,
        selected: [],
        ParseItemDescription: ParseItemDescription
    });

    function InputKeypress($keyEvent) {
        if ($keyEvent.which === 13)
            select.Search();
    }

    $scope.$watch('searchItem', function (newVal) {
        $scope.emptyResponse = false;
    });

    function ParseItemDescription(item) {
        if (!$scope.options.ShowProperty) {
            var composedSelection = "";
            for (property in item)
                if (item.hasOwnProperty(property)) {
                    composedSelection += item[property] + " ";
                }                
            return composedSelection
        } else return item[$scope.options.ShowProperty];
    }
});