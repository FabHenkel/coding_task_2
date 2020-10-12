# Solution for coding task #2
#### Submitted by Fabian Henkel <fabhenkel@gmail.com>

## Getting started
1. Install Node and NPM (via https://nodejs.org/en/download/)
2. Once, ``npm install`` from root directory in order to install all dependencies.
3. Run ``npm run start``  to start the application!
4. Extend the ``cases``-variable in file ``main.ts`` with your custom test-cases.

## Q & A
- Wie verhält sich die Laufzeit Ihres Programms?

Aufgrund der Suchoperation hat die Funktion eine Laufzeit von O(n*log(n)), wobei das Zusammenführen den linearen 
Teil einnimmt.

- Wie kann die Robustheit sichergestellt werden, vor allem im Hinblick auf sehr große Eingaben.

Anstatt das Array mehrfach zu duplizieren, kann auf dem selben Array gearbeitet werden.

- Wie verhält sich der Speicherverbrauch Ihres Programmes?

Da alle Operationen auf dem ursprünglichen Array durchgeführt werden, liegt der Speicherverbrauch bei O(1).


Danke für die interessante Aufgabe :)
