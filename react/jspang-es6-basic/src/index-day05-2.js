
/**
 * day05-2
 * 模块化操作
 * export :负责进行模块化，也是模块的输出。
 * import : 负责把模块引，也是模块的引入操作。
 *
 */
import {ca,add,hello} from './export.js';
import jsp from './export.js';
console.log(ca);
console.log(hello);
console.log(add(1,2));
console.log(jsp);
