var app = angular.module('GABook', [])
  .controller('Controller', ['$scope', function($scope) {
    $scope.instructors = [
     {
       name: 'Nathan Allen',
       github: 'nathanallen',
       image: 'https://avatars3.githubusercontent.com/u/1489337?',
       position: 'Instructor',
       cohort: 25,
     },
     {
       name: 'Alex White',
       github: 'awhit012',
       image: 'https://avatars0.githubusercontent.com/u/6307308?',
       position: 'Instructor',
       cohort: 26,
     },
     {
       name: 'Zoë Foss',
       github: 'zoejf',
       image: 'https://avatars3.githubusercontent.com/u/12026269?v=3&s=400',
       position: 'Developer in Residence',
       cohort: 24,
     },
     {
       name: 'Erik Erwitt',
       github: 'eerwitt',
       image: 'https://avatars1.githubusercontent.com/u/1329385?v=3&s=400',
       position: 'Instructor',
       cohort: 24,
     },
     {
       name: 'Cameron Jacoby',
       github: 'cameronjacoby',
       image: 'https://avatars0.githubusercontent.com/u/7833470?v=3&s=400',
       position: 'Instructor',
       cohort: 28,
     },
     {
       name: 'Ilias Tsangaris',
       github: 'iliastsangaris',
       image: 'https://avatars.githubusercontent.com/u/4505008?',
       position: 'Instructor',
       cohort: 26,
     },
     {
       name: 'Briana Veenstra',
       github: 'bgveenstra',
       image: 'https://avatars.githubusercontent.com/u/3254910?',
       position: 'Instructor',
       cohort: 'Developing new Curriculum',
     },
     {
       name: 'Justin Castilla',
       github: 'justincastilla',
       image: 'https://avatars.githubusercontent.com/u/4304660?',
       position: 'Instructor',
       cohort: 25,
     },
     {
       name: 'Adam Braus',
       github: 'ajbraus',
       image: 'https://avatars2.githubusercontent.com/u/997531?',
       position: 'Instructor',
       cohort: 28,
     },
     {
       name: 'Ben Hulan',
       github: 'benhulan',
       image: 'https://avatars1.githubusercontent.com/u/7320191?',
       position: 'Instructor',
       cohort: 26,
     },
     {
   name: 'Heather Stenson',
   github: 'heystenson',
   image: 'https://avatars2.githubusercontent.com/u/8186438?v=3&s=400',
   position: 'Developer In Residence',
   cohort: 25,
 },
 {
   name: 'Dani Zaghian',
   github: 'DaniZaghian',
   image: 'https://avatars3.githubusercontent.com/u/13294925?v=3&s=400',
   position: 'Developer In Residence',
   cohort: 21,
 },
 {
   name: 'Travis Gaff',
   github: 'tgaff',
   image: 'https://avatars2.githubusercontent.com/u/1916144?v=3&s=460',
   position: 'Instructor',
   cohort: 25,
 }
    ];
    $scope.orderProperty = 'cohort';
  }]);
