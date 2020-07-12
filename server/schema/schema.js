const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLNonNull, GraphQLList } = graphql;
const Recipes = require('../models/recipes');

const RecipeType = new GraphQLObjectType({
  name: 'Recipe',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    dateCreated: { type: GraphQLString } // TODO: datetype
  })
});

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    recipe: {
      type: RecipeType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Recipes.findById(args.id)
      }
    },
    recipes: {
      type: GraphQLList(RecipeType),
      resolve: (parent, args) => {
        return Recipes.find({});
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: Query,
  // mutation: Mutation
});