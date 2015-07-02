/**
* Team.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {
        name: {
            type: 'string',
            unique: true,
            required: true
        },

        members: {
            collection: 'user',
            via: 'team'
        },
        getMembersOfRole: function(role) {
            role = role.toLowerCase();
            return this.members.filter(function(itm) {
                return itm.role.toLowerCase() === role;
            });
        },

        cards: {
            collection: 'card',
            via: 'owners'
        }
    }
};

