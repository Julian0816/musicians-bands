const {db} = require('./db');
const {Band, Musician} = require('./index')

describe('Band and Musician Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await db.sync({ force: true });
    })

    test('can create a Band', async () => {
        // TODO - test creating a band
        const testBand = await Band.create({
            name: 'Music and Beans',
            genre: "Jazz"
        })
        expect(testBand.name).toEqual('Music and Beans');
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        const testMusician = await Musician.create({
            name: 'Andres Cepeda',
            instrument: 'Guitar'
        })
        expect(testMusician.name).toEqual('Andres Cepeda');
    })

    test('Band can have many Mucisians', async () => {
        await db.sync({force: true})

        let newBand = await Band.create({
            name: 'The Beatles',
            genre: 'English rock'
        })

        let newMusician = await Musician.create({
            name: 'Pepito Perez',
            instrument: 'flut'
        })

        await newBand.addMusician(newMusician)

        const musicians = await newBand.getMusicians()

        expect(musicians.length).toBe(1)
    })
})