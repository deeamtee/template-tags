const items = [
	"Сделать проектную работу",
	"Полить цветы",
	"Пройти туториал по Реакту",
	"Сделать фронт для своего проекта",
];

const itemTemplate = document.querySelector(".item_template").content;
const list = document.querySelector(".list");
const formButton = document.querySelector(".form__submit");
const formInput = document.querySelector(".form__input");

const renderItems = () => {
	items.forEach(renderItem);
};

const renderItem = (text) => {
	const htmlElement = itemTemplate.cloneNode(true);
	htmlElement.querySelector('.item__text').textContent = text;
	setEventListeners(htmlElement);

	list.append(htmlElement)
}

const handleSubmit = () => {
	renderItem(formInput.value);
}

function handleDelete(evt) {
	evt.target.closest('.list__item').remove();
}

function handleDuplicate(evt) {
	const text = evt.target.closest('.list__item').querySelector('.item__text').textContent;
	renderItem(text);
}

function setEventListeners(htmlElement) {
	const deleteButton = htmlElement.querySelector('.delete');
	deleteButton.addEventListener('click', handleDelete);

	const copyButton = htmlElement.querySelector('.duplicate');
	copyButton.addEventListener('click', handleDuplicate)
}

formButton.addEventListener('click', handleSubmit)

renderItems();