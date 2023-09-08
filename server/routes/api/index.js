const router = require('express').Router();
const bracketRoutes = require('./bracketRoutes');
const ideaRoutes = require('./ideaRoutes');
// const roundRoutes = require('./roundRoutes');
// const voteRoutes = require('./voteRoutes');
const userRoutes = require('./userRoutes');

router.use('/bracket', bracketRoutes);
router.use('/idea', ideaRoutes);
// router.use('/round', roundRoutes);
// router.use('/vote', voteRoutes);
router.use('/user', userRoutes);

module.exports = router;