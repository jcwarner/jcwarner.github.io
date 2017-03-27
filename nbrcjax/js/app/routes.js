(function() {
    var app = angular.module("nbrcjax");
    app.config(['$routeProvider', '$stateProvider', '$urlRouterProvider', function ($routeProvider, $stateProvider, $urlRouterProvider) {
    	$urlRouterProvider.otherwise('/');
    		
        $stateProvider
            .state('app', {
                abstract: true,
                sticky: true,
                views: {
                    'mainContent': {
                        template: '<ui-view />'
                    }
                }
            })
            .state('app.home',
            {
                 url: '/',
                 templateUrl: 'js/app/templates/home.html',
                 controller: 'homeController',
                 pageTitle: "New Berlin Road Church | Home"
             })
             .state('app.about',
            {
                 url: '/about',
                 templateUrl: 'js/app/templates/about/about.html',
                 controller: 'aboutController',
                 pageTitle: "New Berlin Road Church | About"
             })
             .state('app.find',
            {
                 url: '/about/find',
                 templateUrl: 'js/app/templates/about/about-find.html',
                 controller: 'aboutFindController',
                 pageTitle: "New Berlin Road Church | How to Find Us"
             })
             .state('app.believe',
            {
                 url: '/about/believe',
                 templateUrl: 'js/app/templates/about/about-believe.html',
                 controller: 'aboutBelieveController',
                 pageTitle: "New Berlin Road Church | What We Believe"
             })
             .state('app.staff',
            {
                 url: '/about/staff',
                 templateUrl: 'js/app/templates/about/about-staff.html',
                 controller: 'aboutStaffController',
                 pageTitle: "New Berlin Road Church | Meet Our Staff"
             })
             .state('app.seniorpastor',
            {
                 url: '/about/seniorpastor',
                 templateUrl: 'js/app/templates/about/staff/matthewmeadows.html',
                 controller: 'aboutStaffSPController',
                 pageTitle: "New Berlin Road Church | Matthew Meadows, Senior Pastor"
             })
             .state('app.worshipleader',
            {
                 url: '/about/worshipleader',
                 templateUrl: 'js/app/templates/about/staff/karendavis.html',
                 controller: 'aboutStaffWLController',
                 pageTitle: "New Berlin Road Church | Karen Davis, Worship Leader"
             })
             .state('app.visionteam',
            {
                 url: '/about/visionteam',
                 templateUrl: 'js/app/templates/about/staff/visionteam.html',
                 controller: 'aboutStaffVTController',
                 pageTitle: "New Berlin Road Church | Vision Team"
             })
             .state('app.ministries',
            {
                 url: '/about/ministries',
                 templateUrl: 'js/app/templates/ministries/ministries.html',
                 controller: 'ministriesController',
                 pageTitle: "New Berlin Road Church | Our Ministries"
             })
             
             .state('app.adult',
            {
                 url: '/about/ministries/adult',
                 templateUrl: 'js/app/templates/ministries/ministries-adult.html',
                 controller: 'ministriesAdultController',
                 pageTitle: "New Berlin Road Church | Adult Ministries"
             })
             .state('app.worship',
            {
                 url: '/about/ministries/worship',
                 templateUrl: 'js/app/templates/ministries/ministries-worship.html',
                 controller: 'ministriesWorshipController',
                 pageTitle: "New Berlin Road Church | Worship Ministry"
             })
             .state('app.youth',
            {
                 url: '/about/ministries/youth',
                 templateUrl: 'js/app/templates/ministries/ministries-youth.html',
                 controller: 'ministriesYouthController',
                 pageTitle: "New Berlin Road Church | NBRC Student Ministry"
             })
             .state('app.children',
            {
                 url: '/about/ministries/children',
                 templateUrl: 'js/app/templates/ministries/ministries-children.html',
                 controller: 'ministriesChildrenController',
                 pageTitle: "New Berlin Road Church | Kids' Connection"
             })
             .state('app.servantschedule',
            {
                 url: '/about/ministries/children/schedule',
                 templateUrl: 'js/app/templates/ministries/ministries-children-schedule.html',
                 controller: 'ministriesChildrenScheduleController',
                 pageTitle: "New Berlin Road Church | Childcare Servant Schedule"
             })
             .state('app.calendar',
            {
                 url: '/about/events/calendar',
                 templateUrl: 'js/app/templates/events/calendar.html',
                 controller: 'eventsCalendarController',
                 pageTitle: "New Berlin Road Church | NBRC Calendar"
             })
             .state('app.annoucement',
            {
                 url: '/about/events/annoucements',
                 templateUrl: 'js/app/templates/events/announcements.html',
                 controller: 'eventsAnnouncementController',
                 pageTitle: "New Berlin Road Church | NBRC Announcements"
             })
             .state('app.contact',
            {
                 url: '/about/contact',
                 templateUrl: 'js/app/templates/contact.html',
                 controller: 'contactController',
                 pageTitle: "New Berlin Road Church | Contact NBRC"
             })
             ;
    }]);

}());