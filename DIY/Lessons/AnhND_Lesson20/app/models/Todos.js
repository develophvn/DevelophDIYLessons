import mongoose from 'mongoose';

class Todos {
	constructor() {
		const TodosSchema = new mongoose.Schema({
			title: {
				type: String,
				require: true,
			},
			checked: {
				type: Boolean,
				require: true,
			}
		}, {
			timestamps: true
		});

		this.model = mongoose.model('Todos', TodosSchema);
	}

	findAll() {
		return this.model.find({});
	}

	updateCheckedItem(itemId, checked) {
		const query = {
			_id: itemId,
		};
		const update = {
			$set: {
				checked
			}
		};

		return this.model.updateOne(query, update);
	}

	addNewItem(title) {
		const insert = {
			title,
			checked: false,
		}

		return this.model.insertMany([insert]);
	}

	removeById(itemId) {
		const query = {
			_id: itemId,
		};

		return this.model.deleteOne(query);
	}
}

export default new Todos();
