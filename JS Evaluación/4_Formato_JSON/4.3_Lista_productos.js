const json = '[{"id": 1, "producto": "Lápiz"}, {"id": 2, "producto": "Borrador"}]';

const jsonToObject = JSON.parse(json);

console.log(jsonToObject);

const show = jsonToObject.map((j) => `id: ${j.id}, producto: ${j.producto}`);

console.log(show);

show.forEach((i) => console.log(i));