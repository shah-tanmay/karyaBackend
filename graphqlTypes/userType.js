const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLBoolean } = graphql;

const UserType = new GraphQLObjectType({
	name: "User",
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		email: { type: GraphQLString },
		premium: { type: GraphQLBoolean },
	}),
});

module.exports = {
	UserType,
};
