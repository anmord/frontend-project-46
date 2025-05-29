import path from 'path'
import fs from 'fs';

const parsing = (filepath1, filepath2) => {
 // Преобразуем их в абсолютные пути
  const absolutePath1 = path.resolve(process.cwd(), filepath1);
  const absolutePath2 = path.resolve(process.cwd(), filepath2);

  console.log('Первый файл:', absolutePath1);
  console.log('Второй файл:', absolutePath2);
}

export default parsing;