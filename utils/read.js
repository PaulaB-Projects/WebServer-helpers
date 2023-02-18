//allows us to read a file from the file System, encoding is ignored)
import { readFileSync as read} from "node:fs";

export default path_to_file =>
	read(`${path_to_file}`);
