const express = require('express');
const faker = require('faker');
const _ = require('lodash');
const cors = require('cors');

const app = express();

app.use(cors({origin: 'http://localhost:3000'}))

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

const typeofinfluencers = ["Videojuegos", "Comida", "Belleza", "Entretenimiento", "Tecnología", "Viajes", "Deporte", "Moda"]

app.get('/users', (req, res) => {
    var ids = -1;

    const count = req.query.count;
    const arr = [];
        for(let i = 0; i < count; i++){
            arr.push(i);
    }
    if (!count) {
      return res.status(400).send({
        errorMsg: 'count query parameter is missing.'
      });
    }
    res.send(
      _.times(count, () => {
        const user = faker.name;
        
        var alpha = getRandomInt(0,2);
        const location = faker.address.country();
        ids = ids + 1;

        const arr2 = [];
        for(let i = 0; i < count; i++){
            var beta = getRandomInt(0,2);
            arr2.push(beta == 0 && i != ids? true : false)
        }
        
        return {
          id: ids,
          firstName: user.firstName(),
          lastName: user.lastName(),
          influencer:  alpha == 0 ? true : false,
          followers: alpha == 0 ?  arr2 : [],
          country: location,
          typeofinfluencer : alpha == 0 ? typeofinfluencers[getRandomInt(0,8)] : false
        };
      })
    );
  });

app.listen(3030, () => {
  console.log('server started on port 3030');
});