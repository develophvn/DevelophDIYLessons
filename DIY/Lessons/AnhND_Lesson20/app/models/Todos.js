import mongoose from 'mongoose';

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
})


export default mongoose.model('Todos', TodosSchema)
