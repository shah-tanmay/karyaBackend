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

const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		user: {
			type: UserType,
			args: { id: { type: GraphQLID } },
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
				console.log("here", args);
				const user = new User({
					name: args.name,
					email: args.email,
					premium: args.premium,
				});
				return user.save();
			},
		},
	},
});

module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation: Mutation,
});
