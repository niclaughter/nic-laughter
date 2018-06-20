angular.module('niclaughter', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: './views/home.html',
                controller: 'mainCtrl'
            })

            .state('resume', {
                url: '/resume',
                templateUrl: './views/resume.html',
                controller: 'resumeCtrl'
            })

            .state('portfolio', {
                url: '/portfolio',
                templateUrl: './views/portfolio.html',
                controller: 'portfolioCtrl'
            })

            .state('importfoundation', {
                url: '/importfoundation',
                templateUrl: './views/import.html',
                controller: 'importCtrl'
            })

            .state('ImportFoundation', {
                url: '/ImportFoundation',
                templateUrl: './views/import.html',
                controller: 'importCtrl'
            })

            .state('hungryutah', {
                url: '/hungryutah',
                templateUrl: './views/hungryutah.html',
                controller: 'hungryutahCtrl'
            })

            .state('HungryUtah', {
                url: '/HungryUtah',
                templateUrl: './views/hungryutah.html',
                controller: 'hungryutahCtrl'
            })

            .state('OneMorePun', {
                url: '/OneMorePun',
                templateUrl: './views/onemorepun.html',
                controller: 'onemorepunCtrl'
            })

            .state('onemorepun', {
                url: '/onemorepun',
                templateUrl: './views/onemorepun.html',
                controller: 'onemorepunCtrl'
            })

            .state('iCan', {
                url: '/iCan',
                templateUrl: './views/iCan.html',
                controller: 'iCanCtrl'
            })

            .state('ican', {
                url: '/ican',
                templateUrl: './views/iCan.html',
                controller: 'iCanCtrl'
            });

        $urlRouterProvider
            .otherwise('/');
    });
