var _ = require('lodash');

module.exports = function(starmap) {
    return {
        users: starmap('user', {
                fullName: starmap.calculate(function() {
                    return this.firstName + ' ' + this.lastName;
                }),
                url: starmap.calculate(function() {
                    return '#/people/' + this.username;
                }),

                photos: starmap('photo'),
                topics: starmap('topic'),
                team: starmap('team')
            }),

        topics: starmap('topic', {
                author: starmap('user'),
                pollOptions: starmap('pollOption'),
                parent: starmap('topic'),
                children: starmap('topic'),

                commentText: '',
                showComment: false,
                newCommentEnabled: true,

                getChildrenOfType: function(type) {
                    type = type.toLowerCase();
                    return _.filter(this.children, function(val) {
                        return val.type.toLowerCase() === type;
                    });
                },

                likes: starmap.calculate(function() {
                    return _.filter(this.children, function(val) {
                        return val.type === 'like';
                    })
                }),

                createdAt: starmap.calculate(function(previous) {
                    return new Date(previous);
                }),
                updatedAt: starmap.calculate(function(previous) {
                    return new Date(previous);
                }),

                likeFooter: starmap.calculate(function() {
                    var likes = this.likes, type, params = likes;
                    if (!likes || likes.length === 0) type = 'none';
                    else if (likes.length === 1) type = 'singleLikeCount';
                    else if (likes.length === 2) type = 'twoLikeCount';
                    else {
                        var latestUser = likes[likes.length - 1];
                        type = 'multiRelatedLikeCount';
                        params = [
                            latestUser,
                            likes.length - 1
                        ];
                    }

                    return {
                        type: type,
                        params: params
                    };
                })
            })
    };
};
