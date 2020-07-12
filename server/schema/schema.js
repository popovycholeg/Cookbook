const graphql = require('graphql');
const graphqlDate = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLNonNull, GraphQLList } = graphql;
const { GraphQLDate } = graphqlDate;

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

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addRecipe: {
      type: RecipeType,
      args: {
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        dateCreated: { type: GraphQLString }
      },
      resolve(parent, args) {
        const recipe = new Recipes({
          name: args.name,
          description: args.description,
          dateCreated: new Date()
        });

        return recipe.save();
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});