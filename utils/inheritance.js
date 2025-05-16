// Функции для комбинирования генов и вычисления фенотипа
const Inheritance = {
  // Получить генотип ребёнка (строка из двух аллелей) по генотипам родителей
  getChildGenotype: function(gen1, gen2) {
    // Случайно выбираем одну аллель из каждой строки (генотипа) родителей
    const alleleFromP1 = gen1[Math.floor(Math.random() * gen1.length)];
    const alleleFromP2 = gen2[Math.floor(Math.random() * gen2.length)];
    let child = alleleFromP1 + alleleFromP2;
    // Сортировка: если второй символ заглавный, поменять местами, чтобы заглавная шла первой
    if (child[1] === child[1].toUpperCase() && child[0] === child[0].toLowerCase()) {
      child = child[1] + child[0];
    }
    return child;
  },

  // Определить вариант (variant) по генотипу (используем доминантный аллель, если он есть)
  getPhenotype: function(alleles, genotype) {
    const a1 = genotype[0];
    const a2 = genotype[1];
    // Если хотя бы один аллель доминантный — берём его вариант
    if (alleles[a1].dominant) {
      return alleles[a1].variant;
    }
    if (alleles[a2].dominant) {
      return alleles[a2].variant;
    }
    // Иначе оба рецессивные — вариант любой (одинаковый для a1 или a2)
    return alleles[a1].variant;
  }
};
