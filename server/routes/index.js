const express = require('express')
const router = express.Router()
const foodController = require('../controllers/foodController')
const measureController = require('../controllers/measureController')
const { catchErrors } = require('../handlers/errorHandlers')

/*****
  API
*****/
router.get(
    '/api/foods',
    catchErrors(foodController.findFoods)
);
router.get(
    `/api/foods/:food`,
    catchErrors(foodController.findFood)
);
// router.get(
//     `/api/search`,
//     catchErrors(foodController.searchFood)
// );

router.get(
    '/api/measures',
    catchErrors(measureController.findMeasures)
);
router.get(
    `/api/measures/:measure`,
    catchErrors(measureController.findMeasure)
);


module.exports = router;