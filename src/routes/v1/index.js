import express from 'express';
import { HttpStatusCode } from '*/utilities/constants';
import { boardRoutes } from './board.route';

const router = express.Router();

//Board Apis
router.use('/boards', boardRoutes);

export const apiV1 = { router };
