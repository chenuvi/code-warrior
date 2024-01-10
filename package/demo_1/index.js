const data = {
  hotels: [
    {
      id: 1,
      price: 100,
      score: 80,
    },
    {
      id: 2,
      price: 70,
      score: 90,
    },
    {
      id: 3,
      price: 70,
      score: 95,
    },
  ],
};

function my_sort(data) {
  if (!Array.isArray(data.hotels)) return;
  return [...data.hotels].sort((a, b) => {
    if (a.price === b.price) {
      return b.score - a.score;
    } else {
      return a.price - b.price;
    }
  });
}

let res = my_sort(data)
console.log("🚀 ~ file: index.js:33 ~ res:", res)
