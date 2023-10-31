import type express from 'express';

import { isAuthenticated } from '../middleware';
import { deleteUser, getAllUsers } from '../controllers/users';

export default (router: express.Router) => {
  router.get('/users', isAuthenticated, getAllUsers);
  router.delete('/users/:id', deleteUser);
};
