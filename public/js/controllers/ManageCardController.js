app.controller('ManageCardController', function (
    $scope,
    FlashCardsFactory,
    $rootScope,
    $stateParams
) {
    console.log($stateParams._id);
    // _id
    // answers[]
    // category
    // question

    $scope.submittingCard = false;

    $scope.newCard = {
        question: null,
        category: null,
        answers: [
            { text: null, correct: false },
            { text: null, correct: false },
            { text: null, correct: false }
        ]
    };

    // $scope.newCard = {
    //     question: $stateParams.question,
    //     category:  $stateParams.category,
    //     answers: [
    //         { text: $stateParams.answers[0].text, correct: $stateParams.answers[0].correct },
    //         { text: $stateParams.answers[1].text, correct: $stateParams.answers[1].correct },
    //         { text: $stateParams.answers[2].text, correct: $stateParams.answers[2].correct }
    //     ]
    // };

    $scope.submitNewCard = function (card) {
        $scope.submittingCard = true;
        FlashCardsFactory.addNewCard(card).then(function (newCard) {
            $rootScope.$broadcast('newCardAdded', newCard);
            $scope.submittingCard = false;
            $scope.newCard = {
                question: null,
                category: null,
                answers: [
                    { text: null, correct: false },
                    { text: null, correct: false },
                    { text: null, correct: false }
                ]
            };
        });
    };

});