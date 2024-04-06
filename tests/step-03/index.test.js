const readCSV = require('../../src/csvReader');
const {parseQuery} = require('../../src/queryParser');
const executeSELECTQuery = require('../../src/index');

test('Read CSV File', async () => {
    const data = await readCSV('./student.csv');
    expect(data.length).toBeGreaterThan(0);
    expect(data.length).toBe(5); // Update this to match the actual length
    expect(data[0].name).toBe('John');
    expect(data[0].age).toBe('30'); //ignore the string type here, we will fix this later
});


test('Parse SQL Query', () => {
    const query = 'SELECT id, name FROM student';
    const parsed = parseQuery(query);
    expect(parsed).toEqual({
        fields: ['id', 'name'],
        table: 'student',
        whereClauses: [], // Update this property name
        joinTable: null, // Add this property
        joinCondition: null,// Add this property,
        groupByFields: null,
        hasAggregateWithoutGroupBy: false,
        isDistinct: false,
        joinType: null,
           limit: null,
           orderByFields: null,
    });
});