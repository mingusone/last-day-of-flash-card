app.factory('FlashCardsFactory', function ($http) {

    return {

        getFlashCards: function (category) {

            var queryParams = {};

            if (category) {
                queryParams.category = category;
            }

            return $http.get('/cards', {
                params: queryParams
            }).then(function (response) {
                return response.data;
            });

        },

        addNewCard: function (card) {
           return $http.post('/cards', card).then(function (response) {
               return response.data;
           });
        }

    };

});
