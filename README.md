# Javscript Timezone Conversion 

Convert date to another timezone in javascript

## Example 

    var date = new Date()
    date.toISOString(); // "2013-06-15T12:00:00.123Z"

    date.tz('PST'); // ["2013-06-05T04:00:00.123Z"]    
    
    date.tz('america/los_angeles') // ["2013-06-05T05:00:00.123Z"]

    date.tz('EST') // ["2013-06-15T07:00:00.123Z|(Eastern Standard Time (North America))", "2013-06-15T22:00:00.123Z|(Eastern Standard Time (Australia))"]




