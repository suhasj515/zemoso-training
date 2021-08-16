
Feature: Eval funciton

Scenario: Eval Demo
* eval
"""
var f= function(v){ return v * v}
var nums= [0,1,2,3,4]
var sqares = []
for(var n in nums) {
    sqares.push(f(n))
}
karate.set('temp',sqares)
"""
* match temp == [0,1,4,9,16]