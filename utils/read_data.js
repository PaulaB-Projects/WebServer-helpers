import { readFileSync as read } from 'node:fs';

const ENCODING = 'utf8';

export default (file_name, path ) =>
	JSON.parse(read(`${ path }${ file_name }.json`, ENCODING));
