const graphql = require("graphql");
const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLBoolean,
	GraphQLInputObjectType,
	GraphQLNonNull,
} = graphql;

const UserType = new GraphQLObjectType({
	name: "User",
	fields: () => ({
		name: { type: GraphQLString },
		email: { type: GraphQLString },
		premium: { type: GraphQLBoolean },
	}),
});

module.exports = {
	UserType,
};
