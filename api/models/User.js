/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {
        firstName: {
            type: 'string',
            required: true
        },
        lastName: {
            type: 'string',
            required: true
        },

        username: {
            type: 'string',
            unique: true,
            required: true
        },
        password: {
            type: 'string',
            required: true,
            minLength: 6
        },

        role: {
            type: 'string',
            enum: ['director', 'leader', 'member'],
            defaultsTo: 'member'
        },

        photos: {
            collection: 'photo',
            via: 'owner'
        },
        topics: {
            collection: 'topic',
            via: 'author'
        },

        team: {
            model: 'team'
        }
    }
};

