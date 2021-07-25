const Todo = {
	init() {
		const self = this;

		const todoItems = document.getElementsByClassName('todo-item');
		for(const item of todoItems) {
			item.addEventListener('click', function(e) {
				const id = this.getAttribute('data-id');
				this.classList.toggle('checked');

				const newChecked = this.classList.contains('checked');

				self.changeCheckedItem(id, newChecked);
			})
		}

		const addBtn = document.getElementById('addBtn');
		addBtn.addEventListener('click', function(e) {
			const input = document.getElementsByTagName('input')[0];
			const title = input.value;
			if (!title) {
				return;
			}

			self.addNewItem(title);
		});

		const closeBtns = document.getElementsByClassName('close');
		for(const btn of closeBtns) {
			btn.addEventListener('click', function(e) {
				const container = this.parentElement;
				const id = container.getAttribute('data-id');

				self.removeItem(id);
			})
		}
	},

	async changeCheckedItem(itemId, checked) {
		const requestBody = {
			itemId,
			checked
		}
		await Ajax.post('/todo/item/check', requestBody);
		window.location.reload();
	},

	async addNewItem(title) {
		const requestBody = {
			title,
		}

		await Ajax.post('/todo/item', requestBody);
		window.location.reload();
	},

	async removeItem(itemId) {
		const requestBody = {
			itemId,
		};

		await Ajax.delete('/todo/item', requestBody);
		window.location.reload();
	}
}

document.addEventListener('DOMContentLoaded', function(e) {
	Todo.init();
})
