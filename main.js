// После загрузки страницы настраиваем интерфейс
window.addEventListener('DOMContentLoaded', () => {
  initGeneSelectors();
  updateParentFace('p1', 'face-parent1');
  updateParentFace('p2', 'face-parent2');

  // Обработчик кнопки «Скрестить»
  document.getElementById('cross').addEventListener('click', () => {
    generateChild();
  });
});

// Создаёт опции селектов для каждого признака и родителя
function initGeneSelectors() {
  genes.forEach(gene => {
    // Определяем доминантную и рецессивную буквы
    let dom = null, rec = null;
    for (let allele in gene.alleles) {
      if (gene.alleles[allele].dominant) dom = allele;
      else rec = allele;
    }
    // Возможные генотипы: AA, Aa, aa (с учётом разных букв на разных генах)
    const opts = [
      dom + dom,
      dom + rec,
      rec + rec
    ];
    // Создание <option> для селектов обоих родителей
    opts.forEach(genotype => {
      let opt1 = document.createElement('option');
      opt1.value = genotype; opt1.text = genotype;
      document.getElementById('p1_' + gene.name).appendChild(opt1);

      let opt2 = document.createElement('option');
      opt2.value = genotype; opt2.text = genotype;
      document.getElementById('p2_' + gene.name).appendChild(opt2);
    });
    // Устанавливаем по умолчанию самый "мощный" вариант (два доминантных)
    document.getElementById('p1_' + gene.name).value = dom + dom;
    document.getElementById('p2_' + gene.name).value = dom + dom;

    // При изменении селектора автоматически обновляем лицо родителя
    document.getElementById('p1_' + gene.name).addEventListener('change', () => {
      updateParentFace('p1', 'face-parent1');
    });
    document.getElementById('p2_' + gene.name).addEventListener('change', () => {
      updateParentFace('p2', 'face-parent2');
    });
  });
}

// Обновляет лицо указанного родителя (p1 или p2)
function updateParentFace(prefix, faceId) {
  let genotype = {};
  genes.forEach(gene => {
    genotype[gene.name] = document.getElementById(prefix + '_' + gene.name).value;
  });
  renderFace(faceId, genotype);
}

// Генерирует генотипы ребёнка и отображает его лицо
function generateChild() {
  let childGenotype = {};
  genes.forEach(gene => {
    const g1 = document.getElementById('p1_' + gene.name).value;
    const g2 = document.getElementById('p2_' + gene.name).value;
    childGenotype[gene.name] = Inheritance.getChildGenotype(g1, g2);
  });
  renderFace('face-child', childGenotype);
}

// Рендерит лицо в контейнере faceId по генотипу (обновляет <img> с нужными SVG)
function renderFace(faceId, genotype) {
  genes.forEach(gene => {
    const variant = Inheritance.getPhenotype(gene.alleles, genotype[gene.name]);
    const img = document.querySelector('#' + faceId + ' .' + gene.name);
    if (img) {
      img.src = `assets/svg/${gene.name}/${variant}.svg`;
    }
  });
}
