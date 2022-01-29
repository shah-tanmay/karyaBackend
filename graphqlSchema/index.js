const {
	GraphQLObjectType,
	GraphQLID,
	GraphQLSchema,
	GraphQLString,
	GraphQLBoolean,
	GraphQLNonNull,
	GraphQLList,
} = require("graphql");
const { userResolver } = require("../resolver/userResolver");
const { UserType, CreateUserInputType } = require("../graphqlTypes/userType");
const User = require("../models/UserSchema");
const taskResolver = require("../resolver/taskResolver");
const { TaskType } = require("../graphqlTypes/taskType");
const getTaskResolver = require("../resolver/getTaskResolver");

const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		getUser: {
			type: UserType,
			args: { email: { type: GraphQLString } },
			resolve(parent, args) {
				return userResolver(args);
			},
		},
		getTasks: {
			type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(TaskType))),
			args: { email: { type: GraphQLString } },
			resolve(parent, args) {
				return getTaskResolver(args);
			},
		},
	},
});

const Mutation = new GraphQLObjectType({
	name: "Mutation",
	fields: {
		createUser: {
			type: UserType,
			args: {
				name: { type: new GraphQLNonNull(GraphQLString) },
				email: { type: new GraphQLNonNull(GraphQLString) },
				premium: { type: new GraphQLNonNull(GraphQLBoolean) },
			},
			resolve(parent, args) {
				const user = new User({
					name: args.name,
					email: args.email,
					premium: args.premium,
				});
				return user.save();
			},
		},
		createTask: {
			type: TaskType,
			args: {
				notes: { type: GraphQLString },
				subtasks: { type: GraphQLString },
				description: { type: GraphQLString },
				email: { type: GraphQLString },
				completed: { type: GraphQLBoolean },
				list: { type: GraphQLString },
				due: { type: GraphQLString },
				tags: { type: GraphQLString },
			},
			resolve(parents, args) {
				return taskResolver(args);
			},
		},
	},
});

module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation: Mutation,
});
