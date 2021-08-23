import express from 'express';
import { HttpStatusCode } from '*/utilities/constants';
import { boardRoutes } from './board.route';
import { columnRoutes } from './column.route';
import { cardRoutes } from './card.route';

const router = express.Router();

//Board Apis
router.use('/boards', boardRoutes);

//Column Apis
router.use('/columns', columnRoutes);

//Card Apis
router.use('/cards', cardRoutes);

export const apiV1 = router;
