const Todo = {
	init() {
		const self = this;

		$('.todo-item').click(function () {
			const id = $(this).attr('data-id');
			$(this).toggleClass('checked');

			const newChecked = $(this).hasClass('checked');

			self.changeCheckedItem(id, newChecked);
		});

		$('.addBtn').click(function() {
			const title = $('input').val();
			if (!title) {
				return;
			}

			self.addNewItem(title);
		});

		$('.close').click(function() {
			const container = $(this).parent()[0];
			const id = $(container).attr('data-id');
			
			self.removeItem(id);
		})
	},

	async changeCheckedItem(itemId, checked) {
		const requestBody = {
			itemId,
			checked
		}

		await $.post('/todo/item/check', requestBody);
		// window.location.reload();
	},

	async addNewItem(title) {
		const requestBody = {
			title,
		}

		await $.post('/todo/item', requestBody);
		window.location.reload();
	},

	async removeItem(itemId) {
		const request = {
			url: '/todo/item',
			type: 'DELETE',
			data: {
				itemId
			}
		}
		await $.ajax(request);
		window.location.reload();
	}
}

$(document).ready(function () {
	Todo.init();
});
