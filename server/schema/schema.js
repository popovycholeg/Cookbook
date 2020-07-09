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

// const Mutation = new GraphQLObjectType({
//   name: 'Mutation',
//   fields: {
//     addDirector: {
//       type: DirectorType,
//       args: {
//         name: { type: GraphQLString },
//         age: { type: GraphQLInt }
//       },
//       resolve(parent, args) {
//         const director = new Directors({
//           name: args.name,
//           age: args.age
//         });

//         return director.save();
//       }
//     },
//     addMovie: {
//       type: MovieType,
//       args: {
//         name: { type: GraphQLString },
//         genre: { type: GraphQLString },
//         directorId: { type: GraphQLID },
//         rate: { type: GraphQLInt },
//         watched: { type: GraphQLBoolean }
//       },
//       resolve(parent, args) {
//         const movie = new Movies({
//           name: args.name,
//           genre: args.genre,
//           directorId: args.directorId,
//           rate: args.rate,
//           watched: args.watched
//         });

//         return movie.save();
//       }
//     },
//     deleteDirector: {
//       type: DirectorType,
//       args: {
//         id: { type: GraphQLID }
//       },
//       resolve(parent, args) {
//         return Directors.findByIdAndRemove(args.id);
//       }
//     },
//     deleteMovie: {
//       type: MovieType,
//       args: {
//         id: { type: GraphQLID }
//       },
//       resolve(parent, args) {
//         return Movies.findByIdAndRemove(args.id);
//       }
//     },
//     updateDirector: {
//       type: DirectorType,
//       args: {
//         id: { type: new GraphQLNonNull(GraphQLID) },
//         name: { type: new GraphQLNonNull(GraphQLString) },
//         age: { type: new GraphQLNonNull(GraphQLInt) }
//       },
//       resolve(parent, args) {
//         return Directors.findByIdAndUpdate(
//           args.id,
//           { $set: { name: args.name, age: args.age } },
//           { new: true }
//         )
//       }
//     },
//     updateMovie: {
//       type: MovieType,
//       args: {
//         id: { type: new GraphQLNonNull(GraphQLID) },
//         name: { type: new GraphQLNonNull(GraphQLString) },
//         genre: { type: GraphQLString },
//         directorId: { type: GraphQLID },
//         rate: { type: GraphQLInt },
//         watched: { type: GraphQLBoolean }
//       },
//       resolve(parent, args) {
//         return Movies.findByIdAndUpdate(
//           args.id,
//           {
//             $set: {
//               name: args.name,
//               genre: args.genre,
//               directorId: args.directorId,
//               rate: args.rate,
//               watched: args.watched
//             }
//           },
//           { new: true }
//         )
//       }
//     }
//   },
// });

module.exports = new GraphQLSchema({
  query: Query,
  // mutation: Mutation
});