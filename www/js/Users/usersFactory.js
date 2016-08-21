angular.module('starter')

.factory('factoryInteract', function($resource,URL) {
  return $resource(URL+"/users/interact")
})

.factory('factoryUsers', function($resource,URL) {
  return $resource(URL+"/users/all", {}, {
      'get': {
              method:'GET',
              isArray:true
            }
    })
})
.factory('factoryUser', function($resource,URL) {
  return $resource(URL+"/users/show", {}, {
      'get': {
              method:'GET',
              params:{
                token:'@token',
                id_facebook:'@id_facebook'
              }
            }
    })
})

.factory('factoryFollow', function($resource,URL) {
  return $resource(URL+'/users/follow')
})
.factory('factoryUnfollow', function($resource,URL) {
  return $resource(URL+'/users/unfollow')
})
// .factory('factoryConfirmEmail', function($resource,URL) {
//   return $resource(URL+users/confirm_email/", {}, {
//       'get': { method:'GET',
//                   params:{  confirm_token:'@confirm_token' }
//       }
//
//   })
// })
