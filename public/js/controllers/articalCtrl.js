'use strict';

/***************************************************************
    This contains the controller for the "Artical" articalTagApp
***************************************************************/
articalTagApp.controller('articalAppCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.caseArticle = {};
    $scope.caseArticle.title = "Feature article story title";
    $scope.caseArticle.caption = " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed to" +
        "eiusmod tempor incididunt ut labore et dolore magna aliqua." +
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed to" +
        "eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim and minim" +
        "veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo " +
        "consequet.Duis aute irure dolor in reprehenderit in voluptate velit esse cillium " +
        "dolore eu fugiat nulla pariatur.Expecteur sint cupidatat non proident, sunt in " +
        "culpa qui offica deserunt mollit anim id est laborum.";
    $scope.caseArticle.image = "/images/article_1.jpg";
    $scope.caseArticle.des = " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed to" +
        "eiusmod tempor incididunt ut labore et dolore magna aliqua";
    $scope.articleLimit = 8;
    $scope.predicate = "-date.timestamp";

    //fetch static data for category and activity dropDown
    $scope.fetchNotesData = function() {
        $http.get('/getStaticJsonData')
            .success(function(data) {
                $scope.articles = data.data;
            })
            .error(function(err) {
                console.log("Error in fetching articles");
                console.log(err);
            });
    };
    $scope.sortVal = "title";
    $scope.fetchNotesData();

    $scope.loadMore = function() {
        $scope.articleLimit += 8;
    }

}]);