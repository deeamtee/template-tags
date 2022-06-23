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

	list.append(htmlElement)
}

const handleSubmit = () => {
	renderItem(formInput.value);
}


formButton.addEventListener('click', handleSubmit)

renderItems();