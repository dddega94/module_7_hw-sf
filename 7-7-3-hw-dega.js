const users = [
  {name: "Doncic", age : 27},
  {name: "Lebron", age : 40},
  {name: "Irving", age : 7},
  {name: "Durant", age : 18},
  {name: "Curry", age : 3},
  {name: "Jordan", age : 99}
];
const usersOver18 = users.filter (users => users.age >= 18);
const namesOfUsersOver18 = usersOver18.map (users => users.name)

console.log ('Имена пользователей старше 18-ти: ' + namesOfUsersOver18)