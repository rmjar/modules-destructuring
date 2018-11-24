const cardTemplate = () => `
  <h1>Zastąp mnie</h1>
`;

const container = document.getElementById('container');

const robot = {
  name: 'ESherman',
  caption: 'Lorem ipsum dolor sit amet. Etiam tempus odio et libero aliquam sodales.',
  avatar: 'https://robohash.org/atqueabaliquam.bmp?set=set1',
  avaliable: false
};

container.insertAdjacentHTML('beforeend', cardTemplate(robot));
