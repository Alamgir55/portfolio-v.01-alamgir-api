const express = require('express');
const router = express.Router();
const { checkJwt, checkRole } = require('../controllers/auth');
const { getPortfolios, getPortfolioById, createPortfolio, updatePortfolio, deletePortfolio } = require('../controllers/portfolios')

router.get('', getPortfolios);
router.get('/:id', getPortfolioById);

router.post('', checkJwt, checkRole('admin'), createPortfolio);
router.patch('/:id', checkJwt, checkRole('admin'), updatePortfolio)
router.delete('/:id', checkJwt, checkRole('admin'), deletePortfolio)

module.exports = router;
