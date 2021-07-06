/*
 * @lc app=leetcode.cn id=1418 lang=javascript
 *
 * [1418] 点菜展示表
 */

// @lc code=start
/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function (orders) {
  let { tables, foods, tableOrderMap } = orders.reduce(
    (pre, [_, table, food]) => {
      const { tableMap, foodMap, tableOrderMap, tables, foods } = pre;
      if (!foodMap[food]) {
        foods.push(food);
        foodMap[food] = true;
      }
      if (!tableMap[table]) {
        tables.push(table);
        tableMap[table] = true;
      }
      if (!tableOrderMap[table]) {
        tableOrderMap[table] = { [food]: 1 };
      } else if (!tableOrderMap[table][food]) {
        tableOrderMap[table][food] = 1;
      } else {
        tableOrderMap[table][food] += 1;
      }
      return { tableMap, foodMap, tableOrderMap, tables, foods };
    },
    { tableMap: {}, foodMap: {}, tableOrderMap: {}, tables: [], foods: [] }
  );

  tables = tables.sort((a, b) => a - b);
  foods = foods.sort();

  return tables.reduce(
    (pre, cur) => {
      const arr = [
        cur,
        ...foods.map((food) => "" + (tableOrderMap[cur][food] || 0)),
      ];
      pre.push(arr);
      return pre;
    },
    [["Table", ...foods]]
  );
};
// @lc code=end
orders = orders = [
  ["David", "3", "Ceviche"],
  ["Corina", "10", "Beef Burrito"],
  ["David", "3", "Fried Chicken"],
  ["Carla", "5", "Water"],
  ["Carla", "5", "Ceviche"],
  ["Rous", "3", "Ceviche"],
];
const res = displayTable(orders);

console.log(res);
