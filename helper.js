
const li = document.createElement('li');
li.classList.add('list__item');

const span = document.createElement('span');
span.innerText = text;
span.classList.add('item__text');

li.appendChild(span);
const imgEdit = document.createElement('img');
imgEdit.setAttribute('src', 'images/Edit.png');
li.appendChild(imgEdit);

const imgDupl = document.createElement('img');
imgDupl.setAttribute('src', 'images/Duplicate.png');
li.appendChild(imgDupl);

const imgDel = document.createElement('img');
imgDel.setAttribute('src', 'images/Delete.png');
li.appendChild(imgDel);
list.appendChild(li);

// const htmlElement = itemTemplate.cloneNode(true);
// htmlElement.querySelector('.item__text').innerText = text;
// list.appendChild(htmlElement);