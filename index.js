

import { PrismaClient } from './prisma/generated/client'
import express from 'express'
import request from 'request'
import url from 'url'
const prisma = new PrismaClient();
const app = express()

var target  = url.parse("http://ip.quotaguard.com");
var options = {
    proxy: process.env.QUOTAGUARDSTATIC_URL,
    url: `${target.protocol}//${target.host}`,
    headers: {
        'User-Agent': 'node.js'
    }
};



app.use(express.json())
app.get('/makes', async (req, res) => {

    try {
        var makes = await prisma.carsMakes.findMany();
        res.status(200).json(makes);
    } catch (e) {
        res.status(501).json({
            'error': e,
            'error_code': 501
        })
    }
})

app.post('/makes', async (req, res) => {
    try {
        var make = await prisma.carsMakes.create(
            {
                data: req.body
            }
        );
        res.status(200).json(make)
    } catch (e) {
        res.status(501).json({
            'error': e,
            'error_code': 501
        })
    }
})
app.get('/models', async (req, res) => {

    try {
        var models = await prisma.carsModels.findMany({
            include: {
                carMake: true
            }
        });
        res.status(200).json(models)
    } catch (e) {
        res.status(501).json({
            'error': e,
            'error_code': 501
        })
    }
})

app.post('/models', async (req, res) => {
    try {
        var model = await prisma.carsModels.create(
            {
                data: req.body
            }
        );
        res.status(200).json(model)
    } catch (e) {
        res.status(501).json({
            'error': e,
            'error_code': 501
        })
    }
})
app.get('/cars', async (req, res) => {

    let { skip, limit, offset } = req.query;
    const CURSOR_PARAMS = offset ? {
        cursor: {
            cardId: offset
        }
    } : {};
    const SKIP = !isNaN(skip) ? Number(skip) : 0;
    const LIMIT = !isNaN(limit) ? Number(limit) : 5;
    try {
        let cars = await prisma.cars.findMany({

            skip: SKIP,
            take: LIMIT,
            ...CURSOR_PARAMS,
            include: {
                carMake: true,
                carModel: true
            }
        });
        res.status(200).json(cars)
    } catch (e) {
        res.status(501).json({
            'error': e,
            'error_code': 501
        })
    }
})

app.post('/cars', async (req, res) => {
    try {
        var car = await prisma.cars.create(
            {
                data: req.body
            }
        );
        res.status(200).json(car)
    } catch (e) {
        res.status(501).json({
            'error': e,
            'error_code': 501
        })
    }
})

app.patch('/cars/:id', async (req, res) => {
    let { id } = req.params;
    try {
        var car = await prisma.cars.update(
            {
                where: {
                    cardId: id
                },
                include: {
                    carMake: true,
                    carModel: true
                },
                data: req.body
            }
        );
        res.status(200).json(car)
    } catch (e) {
        res.status(501).json({
            'error': e,
            'error_code': 501
        })
    }
})
app.delete('/cars/:id', async (req, res) => {
    let {id} = req.params;
    try {
        var car = await prisma.cars.delete(
            {
                where: {
                    cardId: id
                },
                include: {
                    carMake: true,
                    carModel: true
                }
            }
        );
        res.status(200).json(car)
    } catch (e) {
        res.status(501).json({
            'error': e,
            'error_code': 501
        })
    }
})
app.set('PORT', process.env.PORT || 3000);

app.get('*',(req,res) =>{
    request(options).pipe(res)
})

app.listen(app.get('PORT'), () => {

    console.log(`Server Running On Port ${app.get('PORT')}`)
    console.log('http://localhost:3000')
})



