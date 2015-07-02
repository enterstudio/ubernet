var _ = require('lodash');

module.exports = function(app, models) {
    app.controller('HomeController', ['$scope', '$http', '$log', '$timeout', function($scope, $http, $log, $timeout) {
        models.users.create({
            firstName: "Tom",
            lastName: "Barham",
            username: "mrfishie",
            password: "123456"
        }).catch(function(ex) { console.log("Didnt create user"); });

        $scope.root = $scope;

        // Get models from the server and bind them
        $scope.topics = models.topics;

        $scope.topics.on('change', function() {
            // update the scope
            _.defer(function() { $scope.$apply(); });
        });

        $scope.newPost = "";
        $scope.newPostEnabled = true;
        $scope.postOnEnter = true;

        $scope.addTopic = function() {
            if (!$scope.newPostEnabled) return;

            if ($scope.newPost.trim() == '') return $scope.newPost = '';

            $scope.newPostEnabled = false;
            $scope.topics.create({
                author: models.users[0],
                type: 'post',
                textContent: $scope.newPost
            }).then(function() {
                $scope.newPost = "";
                $scope.newPostEnabled = true;
            }).catch(function(err) {
                console.log("Error", err);
                console.log(err.response);
            });
        };

        $scope.addComment = function($topic) {
            if (!$topic.newCommentEnabled) return;
            var content = $topic.commentText;

            $topic.newCommentEnabled = false;

            console.log("One");
            var newTopic = $scope.topics.create({
                author: models.users[0],
                type: 'comment',
                textContent: content,
                parent: $topic
            });

            newTopic.then(function() {
                console.log("Two");
                if ($topic.children == null) $topic.children = [];
                $topic.children.push(newTopic);
                return $topic.save();
            }).then(function() {
                console.log("Three");
                $topic.commentText = "";
                $topic.newCommentEnabled = true;
            }).catch(function(ex) {
                console.log("Error", ex);
                console.log(ex.response);
            });
        };
    }]);
};
