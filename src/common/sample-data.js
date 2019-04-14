let id = 1;

function getId(){
  return ++id;
}

export function getContacts() {
  return [
    {
      id:getId(),
      firstName:'John',
      lastName:'Tolkien',
      email:'tolkien@inklings.com',
      phoneNumber:'867-5309'
    },
    {
      id:getId(),
      firstName:'Clive',
      lastName:'Lewis',
      email:'lewis@inklings.com',
      phoneNumber:'867-5309'
    },
    {
      id:getId(),
      firstName:'Owen',
      lastName:'Barfield',
      email:'barfield@inklings.com',
      phoneNumber:'867-5309'
    },
    {
      id:getId(),
      firstName:'Charles',
      lastName:'Williams',
      email:'williams@inklings.com',
      phoneNumber:'867-5309'
    },
    {
      id:getId(),
      firstName:'Roger',
      lastName:'Green',
      email:'green@inklings.com',
      phoneNumber:'867-5309'
    }
  ]
}
