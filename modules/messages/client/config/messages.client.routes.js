(function () {
  'use strict';

  angular
    .module('messages')
    .config(MessagesRoutes);

  /* @ngInject */
  function MessagesRoutes($stateProvider) {

    // Messages state routing
    $stateProvider.
      state('inbox', {
        url: '/messages',
        templateUrl: '/modules/messages/views/inbox.client.view.html',
        controller: 'InboxController',
        controllerAs: 'inbox',
        requiresAuth: true,
        data: {
          pageTitle: 'Messages'
        }
      }).
      state('messageThread', {
        url: '/messages/:username?userId',
        templateUrl: '/modules/messages/views/thread.client.view.html',
        controller: 'MessagesThreadController',
        controllerAs: 'thread',
        requiresAuth: true,
        footerHidden: true,
        resolve: {
          // A string value resolves to a service
          UserProfilesService: 'UserProfilesService',
          SettingsService: 'SettingsService',
          Users: 'Users',

          /* @ngInject */
          userTo: function (UserProfilesService, $q, $stateParams) {

            // Deleted users are passed in by just ID
            if ($stateParams.userId) {
              var deferred = $q.defer();
              deferred.resolve({
                _id: $stateParams.userId
              });
              return deferred.promise;

              /*
              return $q.resolve({
                _id: $stateParams.userId
              });
              */
            }

            // Get actual user
            return UserProfilesService.get({
              username: $stateParams.username
            });
          },
          appSettings: function (SettingsService) {
            return SettingsService.get();
          }
        },
        data: {
          pageTitle: 'Messages'
        }
      });
  }

}());
