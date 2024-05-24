import rules from '@incubateur-ademe/nosgestesclimat/public/co2-model.FR-lang.fr.json' with { type: "json" }
import Engine from 'publicodes'
import { handleInputExcel, initOutputExcel } from './helper.js';

const { inputworksheet, numberOfRow } = await handleInputExcel();
const { outputWorkbook, outputSheet } = await initOutputExcel();
const engine = new Engine(rules);

for (let i = 3; i <= numberOfRow; i ++) {
    const currentRow = inputworksheet.getRow(i);
    
    engine.setSituation({
        "transport . deux roues . empreinte au km": currentRow.getCell(4).value === "scooter thermique" ? "0.08" : "0.19",
        "transport . deux roues . entretien pondéré": "45",
        "transport . deux roues . km": currentRow.getCell(3).value,
        "transport . deux roues . usager": currentRow.getCell(2).value
    });
    
    const valeur = engine.evaluate('transport . deux roues . empreinte');

    outputSheet.addRow([currentRow.getCell(1).value, valeur.nodeValue]);
}

await outputWorkbook.xlsx.writeFile("test-output.xlsx");
