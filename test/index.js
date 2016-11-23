var assert       = require("assert");
var cssTime      = require("../");
var readmeTester = require("readme-tester");


var tests = [
  {
    error: false,
    fn: cssTime.parse,
    input: "100ms",
    output: 100
  },
  {
    error: false,
    fn: cssTime.parse,
    input: "1001ms",
    output: 1001
  },
  {
    error: false,
    fn: cssTime.parse,
    input: "10s",
    output: 10000
  },
  {
    error: true,
    fn: cssTime.parse,
    input: "10m"
  },
  {
    error: false,
    fn: cssTime.stringify,
    input: 1001,
    output: "1001ms"
  },
  {
    error: true,
    fn: cssTime.stringify,
    input: "1001",
  }
]

describe("css-time", function() {
  tests.forEach(function(item, idx) {
    var testName = "test #"+(idx+1)+" ";
    if(item.error) {
      testName += item.input+" -> ERROR"
    }
    else {
      testName += item.input+" -> "+item.output;
    }

    it(testName, function() {
      if(item.error) {
        var error;
        try {
          item.fn(item.input)
        }
        catch(_error) {
          error = _error;
        }
        assert(error);
      }
      else {
        var out = item.fn(item.input)
        assert.equal(out, item.output);
      }
    })
  })

  it("README.md", function(done) {
    readmeTester(__dirname+"/../README.md", function(err, assertions) {
      assert.ifError(err);
      done();
    });
  })
});
