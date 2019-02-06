import React from 'react'
import consolidate, { transform } from './consolidate'

const fake = {
    rate: 2,
    category: 'test category',
    validData: [
      {
        id: 1,
        name: "fake name",
        fuelEfficiency: "Very Low",
        isVehicle: true,
        price: 3000
      }
    ],
    emptyData: {},
    corruptedData: [
      {

      }
    ]
  }

const expected = {
  validData: [
    {
      id: 1,
      name: 'fake name',
      price: '6000.00',
      type: 'test category'
    }
  ],
  emptyData: {},
  corruptedData: [
    {
      "price": "NaN",
      "type": "test category"
    }
  ]
}

describe('components/consolidate.js', function () {
  describe('transform()', function () {
    it('should transform valid object', async function () {
      const actualData = transform(fake.rate, fake.category)(fake.validData)
      expect(actualData).toEqual(expected.validData)
    })
    it('should return empty object on empty data', async function () {
      const actualData = transform(fake.rate, fake.category)(fake.emptyData)
      expect(actualData).toEqual(expected.emptyData)
    })
    it('should return corrupted response on corrupted data', async function () {
      const actualData = transform(fake.rate, fake.category)(fake.corruptedData)
      expect(actualData).toEqual(expected.corruptedData)
    })
  })

  describe('consolidate()', function () {
    it('should return transformed data', async function () {
      const data = consolidate(fake.rate)
      const firstItem = data[0][0]
      expect(firstItem.price).toEqual('6000.00')
      expect(firstItem.type).toEqual('Lawnmower')
    })
  })
})
