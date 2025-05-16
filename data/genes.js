// Определение генов и соответствующих фенотипов
const genes = [
  {
    name: "skin",
    displayName: "Цвет кожи",
    alleles: {
      A: { dominant: true,  variant: "dark"  },  // Доминирующая аллель A -> тёмная кожа
      a: { dominant: false, variant: "light" }   // Рецессивная аллель a -> светлая кожа
    }
  },
  {
    name: "eyes",
    displayName: "Цвет глаз",
    alleles: {
      B: { dominant: true,  variant: "brown" },  // B -> карие глаза
      b: { dominant: false, variant: "blue"  }   // b -> голубые глаза
    }
  },
  {
    name: "hair",
    displayName: "Цвет волос",
    alleles: {
      C: { dominant: true,  variant: "black"  }, // C -> чёрные волосы
      c: { dominant: false, variant: "blonde" }  // c -> светлые волосы
    }
  },
  {
    name: "nose",
    displayName: "Форма носа",
    alleles: {
      D: { dominant: true,  variant: "round"  }, // D -> круглый нос
      d: { dominant: false, variant: "pointy" }  // d -> острый нос
    }
  },
  {
    name: "smile",
    displayName: "Улыбка",
    alleles: {
      E: { dominant: true,  variant: "smile"   }, // E -> улыбающееся лицо
      e: { dominant: false, variant: "neutral" }  // e -> нейтральное выражение
    }
  }
];
