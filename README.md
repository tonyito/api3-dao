# API3 DAO Pool Prototype v2

## Omitted features (planning to implement them as well)

- Linearly released timelocks

## Issues

- Doesn't use SafeMath
- Missing events
- Missing tests
- Missing `require` strings
- Missing docstrings
- Doesn't use modifiers, has some code duplication
- May have some off-by-one errors (especially when multiple events happen on the same block)
