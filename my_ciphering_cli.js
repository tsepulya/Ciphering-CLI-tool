import { checkCommand } from "./utils/check-command.js";

checkCommand(process.argv);

// node my_ciphering_cli -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"
// node my_ciphering_cli -c "C1-C1-R0-A" -o "./output.txt" -i "./input.txt"
// node my_ciphering_cli -c "C1-C1-R0-A" -o "./output.txt"
// node my_ciphering_cli -c "C1-C1-R0-A" -i "./input.txt"