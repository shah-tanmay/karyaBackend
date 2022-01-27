const graphql = require("graphql");
const { userResolver } = require("../resolver/userResolver");
const { UserType } = require("./userType");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLBoolean } = graphql;

const TaskType = new GraphQLObjectType({
	name: "Task",
	fields: () => ({
		notes: { type: GraphQLString },
		subtasks: { type: GraphQLString },
		description: { type: GraphQLString },
		completed: { type: GraphQLBoolean },
		list: { type: GraphQLString },
		due: { type: GraphQLString },
		tags: { type: GraphQLString },
		email: { type: GraphQLString },
		user: {
			type: UserType,
			resolve(parent, args) {
				return userResolver(parent);
			},
		},
	}),
});

module.exports = {
	TaskType,
};
