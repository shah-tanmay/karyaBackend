const graphql = require("graphql");

const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLID,
	GraphQLBoolean,
	GraphQLSchema,
} = graphql;

var fakeUserDatabase = [
	{ name: "Tanmay Shah", email: "shahtanmay@gmail.com", id: 1, premium: false },
	{ name: "Deep Gandhi", email: "deepgandhi@gmail.com", id: 2, premium: false },
	{ name: "Vaibhav Chopra", email: "vaibhav@gmail.com", id: 3, premium: true },
];

const UserType = new GraphQLObjectType({
	name: "User",
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		email: { type: GraphQLString },
		premium: { type: GraphQLBoolean },
	}),
});

const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		user: {
			type: UserType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return fakeUserDatabase.find((item) => {
					return item.id == args.id;
				});
			},
		},
	},
});

module.exports = new GraphQLSchema({
	query: RootQuery,
});

//
