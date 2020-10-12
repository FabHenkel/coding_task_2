import {green, blue, red} from "chalk";
import {merge} from "./src/merge";

/*
 * Use cases. Add your own ones!
 */
const cases: number[][][] = [
    [
        [25,30], [2,19], [14, 23], [4,8],
    ],
    // TODO: Add further test-cases

];

cases
    .forEach((caseItem: number[][], index: number) => {
        console.log(green(`===========`));
        console.log(green(`Case # ${index + 1}`));
        console.log(red(`Before: ${JSON.stringify(caseItem)}`), green(' => After: '), blue(`${JSON.stringify(merge(caseItem))}`));
        console.log(green(`===========`));
    });
