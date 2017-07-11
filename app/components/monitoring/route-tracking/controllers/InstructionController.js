app.controller("InstructionController", function ($scope, InstructionService, $stateParams, InstructionItems) {
  var instructionGroupOptions = [{
      id: 1,
      label: 'número de orden'
    },
    {
      id: 2,
      label: 'producto'
    }
  ];

  var templates = {
    groupByOc: 'app/components/monitoring/route-tracking/views/Instruction/InstructionItemByOC.html',
    groupByProduct: 'app/components/monitoring/route-tracking/views/Instruction/InstructionItemByProduct.html'
  }

  var instructions = {};

  angular.extend($scope, {
    instructionGroupOptions: instructionGroupOptions,
    ChangeSelectedGroupOption: GroupByOptionSelected,
    templates: templates,
    groupedInstructionList: {}
  });

  function GroupByOptionSelected() {
    if ($scope.selectedGroupOption.id == 1) {
      $scope.itemGroupBy = templates.groupByOc;
      DefaultGroup();
    } else if ($scope.selectedGroupOption.id == 2) {
      $scope.itemGroupBy = templates.groupByProduct;
      GroupByProduct();
    }
  }

  function DefaultGroup() {
    $scope.groupedInstructionList.load = instructions.load;
    $scope.groupedInstructionList.unload = instructions.unload;
  }

  function GroupByProduct() {
    $scope.groupedInstructionList.load = InstructionService.ParseOrdersToProducts(instructions.load);
    $scope.groupedInstructionList.unload = InstructionService.ParseOrdersToProducts(instructions.unload);
  }

  (function Init() {
    $scope.selectedGroupOption = instructionGroupOptions[0];
    instructions = InstructionItems;
    GroupByOptionSelected();
    $scope.ResetRouteOptionsDetails('instructionSelected');
    $scope.SelectRouteByID($stateParams.routeID);    
  })();

});