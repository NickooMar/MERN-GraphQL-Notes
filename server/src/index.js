import { startApolloServer } from "./server.js";

import { connectDB } from "./db.js";

import { resolvers } from "./graphql/resolvers.js";
import { typeDefs } from "./graphql/typeDefs.js";

connectDB();
startApolloServer(typeDefs, resolvers);
