const Todo = {
	init() {
		const self = this;
		const todoList = $('.todo-item');

		todoList.click(function () {
			const id = $(this).attr('data-id');
			$(this).toggleClass('checked');

			const newChecked = $(this).hasClass('checked');

			self.changeCheckedItem(id, newChecked);
		});
	},

	async changeCheckedItem(itemId, checked) {
		const requestBody = {
			itemId,
			checked
		}

		const res = await $.post('/todo/item/check', requestBody);
		window.location.reload();
	},
}

$(document).ready(function () {
	Todo.init();
});
