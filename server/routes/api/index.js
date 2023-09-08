const router = require('express').Router();
const bracketRoutes = require('./bracketRoutes');
const ideaRoutes = require('./ideaRoutes');
// const roundRoutes = require('./roundRoutes');
// const voteRoutes = require('./voteRoutes');
// const userRoutes = require('./userRoutes');
const authRoutes = require('./auth.routes');
const userRoutes = require('./user.routes');

router.use('/auth', authRoutes);
router.use('/user', userRoutes);

router.use('/bracket', bracketRoutes);
router.use('/idea', ideaRoutes);
// router.use('/round', roundRoutes);
// router.use('/vote', voteRoutes);

module.exports = router;