import { assert, expect } from 'chai';
import 'mocha';
import { Series } from '../lib/series';

describe('Series', () => {

    it('create series from array of values', ()  => {
        
        expect(new Series([10, 20, 30]).toArray()).to.eql([10, 20, 30]);        

    });

    it('create series from empty array', ()  => {
        
        expect(new Series([]).toArray()).to.eql([]);

    });

    it('create empty series using no params', ()  => {
        
        expect(new Series().toArray()).to.eql([]);
    });

    it('create empty series from empty config', ()  => {
        
        expect(new Series({}).toArray()).to.eql([]);
    });

    it('create empty series from config with no values, although index is set.', ()  => {
        
        expect(new Series({ index: [100, 200, 300] }).toArray()).to.eql([]);
    });

    it('create series from array of values in config', ()  => {

        expect(new Series({ values: [10, 20, 30] }).toArray()).to.eql([10, 20, 30]);        

    });
    
    it('create series from empty array in config', ()  => {

        expect(new Series({ values: [] }).toArray()).to.eql([]);

    });

    it('index is set by default when values are passed in by array', () => {
        var series = new Series([10, 20, 30]);

        expect(series.toPairs()).to.eql([
            [0, 10],
            [1, 20],
            [2, 30],
        ]);
    });

    it('index is set by default when values are passed in by config', () => {
        var series = new Series({
            values: [10, 20, 30]
        });

        expect(series.toPairs()).to.eql([
            [0, 10],
            [1, 20],
            [2, 30],
        ]);
    });

    it('can set index via array passed to constructor', () => {

        var series = new Series({
            values: [10, 20, 30],
            index: [100, 200, 300]
        });

        expect(series.toPairs()).to.eql([
            [100, 10],
            [200, 20],
            [300, 30],
        ]);
    });

});
