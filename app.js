// Pick all the friends from the json using recursion

const myself = {
  name: 'Ansh Prakash',
  friends: [
    {
      name: 'Dinesh',
      friends: [
        {
          name: 'Mahesh',
          friends: [
            {
              name: 'Hari'
            },
            {
              name: 'Sanfeep'
            }
          ]
        }
      ]
    },
    {
      name: 'Rahul'
    }
  ]
};

function getFriendNames(person) {
  const collectedNames = [];

  if (!person.friends) {
    return [];
  }
  
  for (const friend of person.friends) {
    collectedNames.push(friend.name);
    collectedNames.push(...getFriendNames(friend));
  }
  
  return collectedNames;
}

console.log(getFriendNames(myself));