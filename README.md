# :spiral_notepad: Collection of helpers written in javascript

###

#### Usage

<details open>

  <summary>Sample Usage of <strong> excludeFromModel(arr, keys) </strong> </summary>

  ```js
  const collection = [
    {
      name: '1',
      id: '1',
      email: ''
    },
    {
      name: '2',
      id: '2',
      email: ''
    }
  ];

  // Sample usage
  excludeFromModel(collection, ['id', 'email'])
  output:
  [
    { name: "1" }, 
    { name: "2" }
  ]
  ```

</details>

<details open>

  <summary> Sample Usage of <strong> stringToNumberArray(str) </strong> </summary>

  ```js
    stringToNumberArray('123456789')
    output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  ```

</details>

<details open>

  <summary> Sample Usage of <strong> isNegative(v) </strong> </summary>

  ```js
    isNegative('-2.88%') // output: true
    isNegative('-0.5%') // output: true
    isNegative('10%') // output: false
    isNegative('5%') // output: false
    isNegative('-123.45%') // output: true
  ```

</details>
