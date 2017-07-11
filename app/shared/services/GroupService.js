app.factory('GroupService', GroupService);

function GroupService($q) {

    var groupService = {};

    function GetGroupsForGenericSelector() {
        var deferred = $q.defer();

        setTimeout(function () {
            deferred.resolve(GetMockedGroupsForGenericSelector());
        }, 2000);

        return deferred.promise;
    }

    function GetMockedGroupsForGenericSelector() {
        return [{
            Id: 1,
            groupName: "Puerto Santiago"
        }];
    }

    angular.extend(groupService, {
        GetGroupsForGenericSelector: GetGroupsForGenericSelector
    });

    return groupService;

}