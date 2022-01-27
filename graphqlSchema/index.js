const {
	GraphQLObjectType,
	GraphQLID,
	GraphQLSchema,
	GraphQLString,
	GraphQLBoolean,
	GraphQLNonNull,
} = require("graphql");
const { userResolver } = require("../resolver/userResolver");
const { UserType } = require("../graphqlTypes/userType");
const User = require("../models/UserSchema");
const taskResolver = require("../resolver/taskResolver");
const { TaskType } = require("../graphqlTypes/taskType");

const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		user: {
			type: UserType,
			args: { email: { type: GraphQLString } },
			resolve(parent, args) {
				return userResolver(args);
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
				completed: { type: GraphQLBoolean },
				list: { type: GraphQLString },
				due: { type: GraphQLString },
				tags: { type: GraphQLString },
				email: { type: GraphQLString },
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
